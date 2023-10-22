import React, { useState } from 'react';
import './../styles/dashboard.css';
import './../images/admin-logo.png';
import { Link } from 'react-router-dom';

function AdminPanel() {
  const adminProfile = {
    name: 'Urooj Kanwal',
    position: 'lecturer',
    department: 'Computer Science',
    email: 'admin@example.com',
    phone: '123456789',
  };

  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleLogout = () => {
    // Handle logout logic here
  };

  const handleManageClick = (index) => {
    setExpandedMenu(index === expandedMenu ? null : index);
  };

  const teacherAssignments = [
    {
      teacherId: 'teacher123',
      subject: 'Mathematics',
    },
    {
      teacherId: 'teacher456',
      subject: 'Science',
    },
    // Add more assignments as needed
  ];

  // Function to get teacher assignments based on the teacher's ID
  const getTeacherAssignments = (teacherId) => {
    return teacherAssignments.filter((assignment) => assignment.teacherId === teacherId);
  };

  const currentTeacherId = 'teacher123'; // Replace with your implementation

  // Get the teacher's assignments
  const teacherSubjects = getTeacherAssignments(currentTeacherId);

  // Function to render the "Manage students" submenu based on teacher assignments
  const renderManageStudentsSubMenu = () => {
    if (teacherSubjects.length === 0) {
      return (
        <ul className="sublist">
          <li>No assigned subjects</li>
        </ul>
      );
    }

    return (
      <ul className="sublist">
        {teacherSubjects.map((assignment) => (
          <li key={assignment.subject}>
            <Link to={`./../${assignment.subject}`}>{assignment.subject}</Link>
          </li>
        ))}
      </ul>
    );
  };

  
  return (
    <div className="dashboard">
      <header className="page-header">
        <h1>Teacher Panel</h1>
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
              <p>Teacher profile</p>
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
              <li className = 'sublist-nav'>
                <Link to ='./../teacherAttendance'> upload attendance</Link>
              </li>
              <li>
              <div className = 'sublist-nav' onClick={() => handleManageClick(0)}>
                Manage students
              </div>
              {expandedMenu === 0 && (
                <ul className="sublist">
                  <li>
                    <Link to ='./../ITdept'>IT department</Link> 
                  </li>
                  <li>
                    <Link to ='./../ecoDept'>Economics department</Link> 
                  </li>
                  <li>
                    <Link to ='./../chemDept'>Chemistry department</Link> 
                  </li>
                  <li>
                    <Link to ='./../engDept'>English department</Link> 
                  </li>
                  <li>
                    <Link to ='./../mathsDept'>Maths department</Link> 
                  </li>
                  <li>
                    <Link to ='./../intermediate'>Intermediate</Link> 
                  </li>                  
                </ul>
              )}
              </li>
              <li className = 'sublist-nav'>
                <Link to ='./../viewTimeTable'>view timetable</Link>
              </li>

              <li className = 'sublist-nav'>
                <Link to ='./../departmentTimeTable'>schedule extra class</Link>
              </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminPanel;
