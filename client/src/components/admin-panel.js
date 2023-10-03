import React, { useState } from 'react';
import './../styles/dashboard.css';
import './../images/admin-logo.png';
import { Link } from 'react-router-dom';

function AdminPanel() {
  const adminProfile = {
    name: 'Urooj Kanwal',
    position: 'Admin',
    department: 'Administration',
    email: 'admin@example.com',
    phone: '123456789',
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <div className="dashboard">
      <header className="page-header">
        <h1>Admin Panel</h1>
        <Link to="/components/login">
          <button className="logout-button1" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      </header>
      <div className="main-page">
        <div className="information">
          <div className='my-profile-header'>
            <div className='my-profile-logo'>

            </div>
            <div className='my-profile-head'>
              <p>Admin profile</p>
            </div>
          </div>           
          <div className='my-profile-info'>
          <ul>
                  <li>
                    <strong>Name:</strong> {adminProfile.name}
                  </li>
                  <li>
                    <strong>Position:</strong> {adminProfile.position}
                  </li>
                  <li>
                    <strong>Department:</strong> {adminProfile.department}
                  </li>
                  <li>
                    <strong>Email:</strong> {adminProfile.email}
                  </li>
                  <li>
                    <strong>Phone:</strong> {adminProfile.phone}
                  </li>
           </ul>
          </div>
        </div>
        <nav className="navigator">
          <ul className="nav-list">
            <li>
              <Link to="/components/principalManagement">Manage principal</Link>
            </li>
            <li>
              <Link to="/components/addTeacherInformation">Manage teacher</Link>
            </li>
            <li>
              <Link to="/components/addStudentInformation">Manage student</Link>
            </li>
            <li>
              <Link to="/components/addParent">Manage parent</Link>
            </li>
            <li>
              <Link to="/components/resetPassword">Change settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminPanel;
