// src/pages/UploadReport.tsx

import React, { useState } from 'react';
import { uploadReportFile } from '../services/apiService';

const UploadReport: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const reportId = 2; // Replace with the actual report ID

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const response = await uploadReportFile(reportId, selectedFile);
        console.log('File uploaded successfully:', response);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-4">
        <h1 className="text-2xl font-bold">Upload Report File</h1>
      </header>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <input type="file" onChange={handleFileChange} />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
          onClick={handleUpload}
        >
          Upload File
        </button>
      </div>
    </div>
  );
}

export default UploadReport;
