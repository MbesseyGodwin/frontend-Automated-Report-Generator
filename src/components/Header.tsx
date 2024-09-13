// frontend/src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="hover:underline">
        <h1 className="text-2xl font-bold" title="Automated Report Generator">ARG</h1>
        </Link>
        <nav className="space-x-4">
          <Link to="/reports" className="hover:underline">Reports</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
