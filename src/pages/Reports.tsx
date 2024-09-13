import React, { useEffect, useState } from 'react';
import { 
  getUserReports, 
  downloadReport, 
  createReport, 
  uploadReportFile 
} from '../services/apiService';

const Reports: React.FC = () => {
  const [reports, setReports] = useState<any[]>([]);
  const [newReport, setNewReport] = useState({ title: '', description: '', user_id: 1 });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = 1; // Example user ID, replace with dynamic value as needed

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await getUserReports(userId);
        setReports(data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, [userId]);

  const handleDownload = async (reportId: number, format: string) => {
    try {
      const report = await downloadReport(reportId, format);
      const url = window.URL.createObjectURL(new Blob([report]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `report-${reportId}.${format}`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  };

  const handleCreateReport = async () => {
    try {
      const createdReport = await createReport(newReport.title, newReport.description, newReport.user_id);
      setReports([...reports, createdReport]);
      setIsModalOpen(false); // Close the modal after creation
    } catch (error) {
      console.error('Error creating report:', error);
    }
  };

  const handleFileUpload = async (reportId: number) => {
    if (selectedFile) {
      try {
        await uploadReportFile(reportId, selectedFile);
        alert('File uploaded successfully!');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-100 text-black p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Your Reports</h1>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Create Report
          </button>
        </div>
      </header>

      {/* Modal for Creating Reports */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Create a New Report</h2>
            <input 
              type="text" 
              placeholder="Title" 
              className="border p-2 mb-4 w-full rounded-lg"
              value={newReport.title}
              onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
            />
            <textarea 
              placeholder="Description" 
              className="border p-2 mb-4 w-full rounded-lg" 
              value={newReport.description}
              onChange={(e) => setNewReport({ ...newReport, description: e.target.value })}
            />
            <div className="flex justify-end">
              <button 
                className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={handleCreateReport}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Report List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {reports.length > 0 ? (
          <ul className="space-y-4">
            {reports.map(report => (
              <li key={report.id} className="p-4 border rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">{report.title}</h2>
                    <p className="text-gray-600">{report.description}</p>
                    <p className="text-sm text-gray-400">Created at: {report.created_at}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => handleDownload(report.id, 'pdf')}
                    >
                      Download PDF
                    </button>
                    <input 
                      type="file" 
                      className="hidden" 
                      id={`upload-${report.id}`}
                      onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)} 
                    />
                    <label 
                      htmlFor={`upload-${report.id}`}
                      className="bg-purple-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                    >
                      Upload File
                    </label>
                    <button
                      className="bg-purple-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => handleFileUpload(report.id)}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No reports available.</p>
        )}
      </div>
    </div>
  );
}

export default Reports;
