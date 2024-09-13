import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import ReportDetail from './pages/ReportDetail';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import DataSources from './pages/DataSources';
import CreateReport from './pages/CreateReport';
import UserReports from './pages/UserReports';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/:id" element={<ReportDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data-sources" element={<DataSources />} />
        <Route path="/create-report" element={<CreateReport />} />
        <Route path="/user-reports/:userId" element={<UserReports />} />
      </Routes>
    </Router>
  );
}

export default App;
