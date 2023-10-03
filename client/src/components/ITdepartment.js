import React, { useState } from 'react';
import './../styles/ITdepartment.css';
import { Link } from 'react-router-dom';

const ITDepartmentPage = () => {
  const [selectedSemester, setSelectedSemester] = useState('Fall');

  const subjectsBySemester = {
    'Fall': {
      '1st Semester': ['Introduction to Grammar', 'Programming Fundamentals', 'Programming Fundamentals (Lab)', 'Introduction to Information and Communication Technologies', 'Calculus and Analytical Geometry', 'Basic Electronics'],
      '3rd Semester': ['Discrete Structures', 'Multimedia System & Design', 'Data Structure and Algorithms', 'Data Structure and Algorithms Lab', 'Web Systems & Technologies', 'Pakistan Studies', 'Introduction to Psychology-I'],
      '5th Semester': ['Artificial Intelligence', 'Information Security', 'Web Services'],
      '7th Semester': ['Internet of Things', 'Machine Learning', 'Blockchain Technology'],
    },
    'Spring': {
      '2nd Semester': ['Introduction to Economics', 'English Language Skills', 'Islamic Studies', 'Object Oriented Programming', 'Object Oriented Programming (Lab)', 'Digital Logic Design', 'Information Systems'],
      '4th Semester': ['Mobile App Development', 'Operating Systems', 'Database Management Systems'],
      '6th Semester': ['Big Data Analytics', 'Cloud Computing', 'Software Testing'],
      '8th Semester': ['Cybersecurity', 'Natural Language Processing', 'Computer Vision'],
    },
  };

  const toggleSemester = (semester) => {
    setSelectedSemester(semester);
  };

  return (
    <div className="it-department-page">
      <div className='it-department-header'>
        <h1>IT Department</h1>
      </div>
      
      <div className="semester-toggle">
        <button onClick={() => toggleSemester('Fall')} className={selectedSemester === 'Fall' ? 'active' : ''}>Fall</button>
        <button onClick={() => toggleSemester('Spring')} className={selectedSemester === 'Spring' ? 'active' : ''}>Spring</button>
      </div>
      <div className="button-container">
        <div className="row">
          {Object.keys(subjectsBySemester[selectedSemester]).map((semesterName) => (
            <div className="semester-button" key={semesterName}>
              <button onClick={() => toggleSemester(semesterName)}>{semesterName}</button>
              <ul className={`dropdown-menu ${selectedSemester === semesterName ? 'show' : ''}`}>
                {subjectsBySemester[selectedSemester][semesterName].map((subject) => (
                  <li key={subject}>
                    <Link to="/styles/courseOutline">{subject}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITDepartmentPage;
