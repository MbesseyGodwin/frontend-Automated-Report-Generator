import React from 'react';
import { useParams } from 'react-router-dom';

const UserReports: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div>
      <h2>User Reports - User ID: {userId}</h2>
      {/* Display reports for a specific user */}
    </div>
  );
};

export default UserReports;
