// frontend/src/pages/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      <div className="container max-w-6xl bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Welcome to the Automated Report Generator</h1>
        <p className="text-lg text-gray-700 mb-6">
          Our Automated Report Generator is a powerful tool designed to help you efficiently manage and generate reports from various data sources. Whether you need to create, view, or download reports, our application provides a user-friendly interface to streamline the process.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Features:</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li><strong>User Management:</strong> Register, log in, and manage your account securely.</li>
            <li><strong>Data Source Management:</strong> Add, update, and test connections to various data sources.</li>
            <li><strong>Report Generation:</strong> Create, fetch, and download reports in different formats like PDF and Excel.</li>
            <li><strong>Report File Management:</strong> Upload and manage report files associated with your generated reports.</li>
            <li><strong>Report History and Analytics:</strong> View your report history and get insights into your report generation patterns.</li>
          </ul>
        </div>
        <div className="flex justify-end">
        <Link
          to="./login"
          className="bg-red-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-colors"
        >
          Login to Get Started
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
