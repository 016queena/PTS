import React from 'react';
import './studentPanel.css';
import principal from './download.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function StudentPanel() {
  const principalProfile = {
    name: 'Urooj Kanwal',
    position: 'Principal',
    department: 'Information Technology',
    email: 'ITstudent@example.com',
    phone: '123456789',
  };

  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <div className="Admin-panel">
      <header className="dashboard-header">
        <h1>Student Panel</h1>
        <div className="settings-dropdown">
          <FontAwesomeIcon icon={faCogs} onClick={toggleSettings} />
          {showSettings && (
            <div className="dropdown-content">
              <a href="/resetPassword.js">change password</a>
              <a href="#">Setting 2</a>
            </div>
          )}
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div className="dashboard-content">
        <div className="profile">
          <h2>Student Profile</h2>
          <div className="principal-logo"></div>
          <ul>
            <li>
              <strong>Name:</strong> {principalProfile.name}
            </li>
            <li>
              <strong>Department:</strong> {principalProfile.department}
            </li>
            <li>
              <strong>Email:</strong> {principalProfile.email}
            </li>
            <li>
              <strong>Phone:</strong> {principalProfile.phone}
            </li>
          </ul>
        </div>
        <nav className="dashboard-navigation">
          <ul>
            <li>
              <Link to ='./student-panel/view-Q'>View assignment</Link>
            </li>
            <li>
            <Link to ='./student-panel/view-Q'>View quiz</Link>
            </li>
            <li>
            <Link to ='./student-panel/view-Q'>View daily task</Link>
            </li>
            <li>view marks</li>
            <li>view remarks</li>
            {/* Add more navigation options here */}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default StudentPanel;
