import React, { useState } from 'react';
import './../styles/parentPanel.css';
import { Link } from 'react-router-dom';

function ParentPanel() {
  const principalProfile = {
    name: 'Urooj Kanwal',
    parentOf: 'Noor',
    department: 'Information Technology',
    email: 'ITstudent@example.com',
    phone: '123456789',
  };

  const [marksData, setMarksData] = useState([
    {
      subject: 'database',
      quiz1: 5,
      quiz2: 5,
      assignment1: 5,
      assignment2: 5,
      mids: 18,
      sessionals: 20,
      finals: 60,
    },
    {
      subject: 'project management',
      quiz1: 4,
      quiz2: 5,
      assignment1: 4,
      assignment2: 3,
      mids: 50,
      sessionals: 16,
      finals: 55,
    },

    {
      subject: 'system integration',
      quiz1: 85,
      quiz2: 95,
      assignment1: 90,
      assignment2: 80,
      mids: 80,
      sessionals: 85,
      finals: 75,
    },
    // Add data for other subjects as needed

    
  ]);
  const [showCourseProgress, setShowCourseProgress] = useState(false);

  const courses = [
    { name: 'IT-PM', link: '/it-pm' },
    { name: 'SIA', link: '/sia' },
    { name: 'DBA', link: '/sia' },
    // Add more courses as needed
  ];

  const handleCourseSelect = (course) => {
    window.location.href = course.link;
  };

  const toggleCourseProgress = () => {
    setShowCourseProgress(!showCourseProgress);
  };
  

  const updatedMarksData = marksData.map((marks) => {
    const totalMarks =
    marks.quiz1 +
    marks.quiz2 +
    marks.assignment1 +
    marks.assignment2 +
    marks.mids +
    marks.sessionals +
    marks.finals;

  let grade;
  if (totalMarks >= 85) {
    grade = 'A+';
  } else if (totalMarks >= 80 && totalMarks < 85) {
    grade = 'A';
  } else if (totalMarks >= 75 && totalMarks < 80) {
    grade = 'B+';
  }  else if (totalMarks >= 70 && totalMarks < 75) {
    grade = 'B';
  }  else if (totalMarks >= 65 && totalMarks < 70) {
    grade = 'B-';
  }  else if (totalMarks >= 60 && totalMarks < 65) {
    grade = 'C+';
  }  else if (totalMarks >= 55 && totalMarks < 60) {
    grade = 'C';
  }  else if (totalMarks >= 40 && totalMarks < 50) {
    grade = 'D';
  }  else {
    grade = 'F';
  } 

  return {
    ...marks,
    total: totalMarks,
    grade: grade,
  };
    // ... (Rest of the logic to calculate total d grmarks anade)
  });

  const [showSettings, setShowSettings] = useState(false);
  const [showMarks, setShowMarks] = useState(false);
  const [showRemarks, setShowRemarks] = useState(false);
  const [showLeaveForm, setShowLeaveForm] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [semester, setSemester] = useState('Fall 2023');
  const [previousLeaves, setPreviousLeaves] = useState([
    { date: 'August 15', reason: 'Family Event' },
    { date: 'September 3', reason: 'Doctor Appointment' },
  ]);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleMarks = () => {
    setShowMarks(!showMarks);
    setShowRemarks(false);
    setShowProfile(false);
    setShowLeaveForm(false);
  };

  const toggleRemarks = () => {
    setShowRemarks(!showRemarks);
    setShowMarks(false);
    setShowProfile(false);
    setShowLeaveForm(false);
  };

  const toggleLeaveForm = () => {
    setShowLeaveForm(!showLeaveForm);
    setShowMarks(false);
    setShowRemarks(false);
    setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile(true);
    setShowMarks(false);
    setShowRemarks(false);
    setShowLeaveForm(false);
  };

  const handleLeaveReasonChange = (event) => {
    // Add your logic for handling leave reason change here
  };

  const handleLeaveSubmit = () => {
    // Add your logic for handling leave form submission here
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    
    <div className="view-page">
      <header className="view-page-header">
        <h1>Parent Panel</h1>
        <Link to="/components/login">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      </header>

      <div className="view-page-content">
        {showProfile ? (
          <div className="parent-profile">
            <div className= "view-profile">
              <div className= "view-profile-head">
                <div className="view-logo"></div>
                <div className='parent-profile-header'>
                  <h2>Parent Profile</h2>
                </div>
              </div>
              <div className= "view-profile-info">
              <ul>
                <li>
                  <strong>Name:</strong> {principalProfile.name}
                </li>
                <li>
                  <strong>Parent of:</strong> {principalProfile.parentOf}
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
            </div>
          </div>
        ) : showMarks ? (
          <div className="marks">
            <h2>Student Marks</h2>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Quiz 1</th>
                  <th>Quiz 2</th>
                  <th>Assignment 1</th>
                  <th>Assignment 2</th>
                  <th>Mids</th>
                  <th>Sessionals</th>
                  <th>Finals</th>
                  <th>Total</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {updatedMarksData.map((marks, index) => (
                  <tr key={index}>
                    <td>{marks.subject}</td>
                    <td>{marks.quiz1}</td>
                    <td>{marks.quiz2}</td>
                    <td>{marks.assignment1}</td>
                    <td>{marks.assignment2}</td>
                    <td>{marks.mids}</td>
                    <td>{marks.sessionals}</td>
                    <td>{marks.finals}</td>
                    <td>{marks.total}</td>
                    <td>{marks.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : showRemarks ? (
          <div className="remarks">
            <h2>Teacher Remarks</h2>
            {/* Add content for teacher remarks here */}
          </div>
        ) : showLeaveForm ? (
          <div className="leave-form">
            <h2>Apply for Leave</h2>
            <p>Semester: {semester}</p>
            <h3>Previous Leaves:</h3>
            {previousLeaves.length > 0 ? (
              <ul>
                {previousLeaves.map((leave, index) => (
                  <li key={index}>
                    {leave.date} - {leave.reason}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No previous leaves in this semester.</p>
            )}
            <textarea
              placeholder="Reason for leave"
              onChange={handleLeaveReasonChange}
            ></textarea>
            <button onClick={handleLeaveSubmit}>Submit</button>
          </div>
        ) : null}
        <nav className="parent-view-navigation">
          <ul>
            <li onClick={toggleProfile}>view profile</li>
            <li onClick={toggleMarks}>view marks</li>
            <li onClick={toggleRemarks}>view remarks</li>
            <li onClick={toggleLeaveForm}>apply for leave</li>
            <li onClick={toggleCourseProgress}>view course progress</li>
            {showCourseProgress && (
              <div className="course-dropdown">
                <ul>
                  {courses.map((course, index) => (
                    <li key={index} onClick={() => handleCourseSelect(course)}>
                      {course.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ParentPanel;
