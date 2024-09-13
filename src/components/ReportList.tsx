import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportList: React.FC = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('/api/reports')
      .then(response => setReports(response.data))
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  return (
    <div>
      {reports.map((report: { id: string | number; title: string }) => (
        <div key={report.id}>{report.title}</div>
      ))}
    </div>
  );
}

export default ReportList;
