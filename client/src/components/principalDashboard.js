import React, { useState } from 'react';
import './../styles/dashboard.css';
import './../images/admin-logo.png';
import { Link } from 'react-router-dom';

function PrincipalDashboard() {
  const adminProfile = {
    name: 'Urooj Kanwal',
    position: 'Principal',
    department: 'Education',
    email: 'principal@example.com',
    phone: '123456789',
  };

  const [showDepartments, setShowDepartments] = useState(false);

  const handleLogout = () => {
    // Handle logout logic here
  };

  const toggleDepartments = () => {
    // Toggle the visibility of the department list
    setShowDepartments(!showDepartments);
  };

  return (
    <div className="dashboard">
      <header className="page-header">
        <h1>Principal Panel</h1>
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
              <p>Principal profile</p>
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
              <Link to="/components/teacherAttendance">faculty attendance</Link>
            </li>
            <li onClick={toggleDepartments}> syllabus progress{showDepartments && (
                <ul className='nav-list-two'>
                  <Link to = './components/ITdepartment'>
                    <li>Information Technology</li>
                  </Link>
                  
                  <li>Chemistry</li>
                  <li>English</li>
                  <li>Economics</li>
                  <li>Maths</li>
                  <li>Intermediate</li>
                </ul>
              )}
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

export default PrincipalDashboard;
