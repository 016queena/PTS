import React, { useState, useEffect } from 'react';
import './../styles/dashboard.css';
import './../images/admin-logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminPanel() {
  const [adminProfile, setAdminProfile] = useState({});

  useEffect(() => {
    axios.get('/api/admin/profile/adminId')
      .then((response) => {
        setAdminProfile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching admin profile', error);
      });
  }, []);

  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleLogout = () => {
    // Handle logout logic here
  };

  const handleManageClick = (index) => {
    setExpandedMenu(index === expandedMenu ? null : index);
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
            <div className='my-profile-logo'></div>
            <div className='my-profile-head'>
              <p>Admin profile</p>
            </div>
          </div>
          <div className='my-profile-info'>
            <ul>
              <li>
                <strong>Name:</strong> {adminProfile.Name}
              </li>
              <li>
                <strong>CNIC:</strong> {adminProfile.CNIC}
              </li>
              <li>
                <strong>Position:</strong> {adminProfile.Position}
              </li>
              <li>
                <strong>Email:</strong> {adminProfile.Email}
              </li>
              <li>
                <strong>Phone:</strong> {adminProfile.Phone}
              </li>
            </ul>
          </div>
        </div>
        <nav className="navigator">
          <ul className="nav-list">
            <li>
              <div className = 'sublist-nav' onClick={() => handleManageClick(0)}>
                Manage principal
              </div>
              {expandedMenu === 0 && (
                <ul className="sublist">
                  <li>
                    <Link to ='./../principalManagement'>Add</Link> 
                  </li>
                  <li>Remove</li>
                  <li>Update</li>
                </ul>
              )}
            </li>
            <li>
              <div className = 'sublist-nav'  onClick={() => handleManageClick(1)}>
                Manage teacher
              </div>
              {expandedMenu === 1 && (
                <ul className="sublist">
                  <li>
                    <Link to ='./../addTeacherInformation'>Add</Link> 
                  </li>
                  <li>Remove</li>
                  <li>Update</li>
                </ul>
              )}
            </li>
            
            <li>
              <div className = 'sublist-nav' onClick={() => handleManageClick(2)}>
                Manage student
              </div>
              {expandedMenu === 2 && (
                <ul className="sublist">
                  <li>
                    <Link to ='./../addStudentInformation'>Add</Link> 
                  </li>
                  <li>Remove</li>
                  <li>Update</li>
                </ul>
              )}
            </li>

            <li>
              <div className = 'sublist-nav' onClick={() => handleManageClick(3)}>
                Manage parent
              </div>
              {expandedMenu === 3 && (
                <ul className="sublist">
                  <li>
                    <Link to ='./../addParent'>Add</Link> 
                  </li>
                  <li>Remove</li>
                  <li>Update</li>
                </ul>
              )}
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminPanel;
