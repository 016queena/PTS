import './../teacher panel/teacherPanel.css';
import './../download.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function TeacherDashboard() {
  const teacherProfile = {
    name: 'Urooj Kanwal',
    position: 'Assistant lecturer',
    department: 'teaching',
    email: 'teacher@example.com',
    phone: '123456789',
  };

  const [showSettings, setShowSettings] = useState(false);
  const [showStudentManagementMenu, setShowStudentManagementMenu] = useState(false);  
  const [showTimeTableMenu, setShowTimeTableMenu] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleStudentManagementMenu = () => {
    setShowStudentManagementMenu(!showStudentManagementMenu);
  };

  const toggleTimeTableMenu = () => {
    setShowTimeTableMenu(!showTimeTableMenu);
  };


  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <div className="teacher-dashboard">
      <header className="dashboard-header">
        <h1>Teacher Panel</h1>
        <div className="settings-dropdown">
          <FontAwesomeIcon icon={faCogs} onClick={toggleSettings} />
          {showSettings && (
            <div className="dropdown-content">
              <a href="#">Change Password</a>
              <a href="#">Setting 2</a>
              <a href="#">Setting 3</a>
            </div>
          )}
        </div>
      </header>
      <div className="dashboard-content">
        <div className="profile">
          <h2>Teacher Profile</h2>
          <div className="teacher-logo"></div>
          <ul>
            <li>
              <strong>Name:</strong> {teacherProfile.name}
            </li>
            <li>
              <strong>Position:</strong> {teacherProfile.position}
            </li>
            <li>
              <strong>Department:</strong> {teacherProfile.department}
            </li>
            <li>
              <strong>Email:</strong> {teacherProfile.email}
            </li>
            <li>
              <strong>Phone:</strong> {teacherProfile.phone}
            </li>
          </ul>
        </div>
        <nav className="dashboard-navigation">
          <ul>            
            <li>
              <Link to='./components/teachcerAttendance'>Upload attendance</Link> 
              </li>
            <li onClick={toggleStudentManagementMenu}>Manage Students</li>
            {showStudentManagementMenu && (
              <ul className="dropdown-menu">
                <li>
                  <Link to='./components/ITdepartment'>IT department</Link> 
                </li>
                <li>
                  <Link to='./components/chemDepartment'>Chem department</Link>
                </li>
                <li>
                  <Link to='./components/ecoDepartment'>Eco department</Link>
                </li>
                <li>
                  <Link to='./components/ITdepartment'>Eng department</Link>
                </li>
                <li>
                  <Link to='./components/mathsDepartment'>Maths department</Link>
                </li>
                <li>Intermediate</li>
              </ul>
            )}
           <li onClick={toggleTimeTableMenu}>Time Table</li>
              {showTimeTableMenu && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to='./compoenets/viewTimeTable'>View time table</Link> 
                  </li>
                  <li>schedule extra class</li>
                </ul>
              )}
            <li>
              <Link to ='./components/login'>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </Link>
                
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TeacherDashboard;
