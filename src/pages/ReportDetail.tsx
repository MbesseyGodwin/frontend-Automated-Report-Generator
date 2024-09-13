import React from 'react';
import { useParams } from 'react-router-dom';

const ReportDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Report Detail - {id}</h2>
      {/* Display detailed report data */}
    </div>
  );
};

export default ReportDetail;
