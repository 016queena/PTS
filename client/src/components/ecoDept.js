
import React, { useState } from 'react';
import './../styles/dept.css';

const EcoPage = () => {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSemesterButton, setSelectedSemesterButton] = useState(null);

  const subjectsBySemester = {
    'Fall': ['1st Semester', '3rd Semester', '5th Semester', '7th Semester'],
    'Spring': ['2nd Semester', '4th Semester', '6th Semester', '8th Semester'],
  };

  const subjectsBySemester1 = {
    '1st Semester': ['Introduction to Grammar', 'Programming Fundamentals', 'Programming Fundamentals (Lab)', 'Introduction to Information and Communication Technologies', 'Calculus and Analytical Geometry', 'Basic Electronics'],
    '3rd Semester': ['Discrete Structures', 'Multimedia System & Design', 'Data Structure and Algorithms', 'Data Structure and Algorithms Lab', 'Web Systems & Technologies', 'Pakistan Studies', 'Introduction to Psychology-I'],
    '5th Semester': ['Artificial Intelligence', 'Information Security', 'Web Services'],
    '7th Semester': ['Internet of Things', 'Machine Learning', 'Blockchain Technology'],
  };

  const subjectsBySemester2 = {
    '2nd Semester': ['Introduction to Economics', 'English Language Skills', 'Islamic Studies', 'Object Oriented Programming', 'Object Oriented Programming (Lab)', 'Digital Logic Design', 'Information Systems'],
    '4th Semester': ['Mobile App Development', 'Operating Systems', 'Database Management Systems'],
    '6th Semester': ['Big Data Analytics', 'Cloud Computing', 'Software Testing'],
    '8th Semester': ['Cybersecurity', 'Natural Language Processing', 'Computer Vision'],
  };

  const toggleSemester = (semester) => {
    setSelectedSemester(semester);
    setSelectedSemesterButton(null);
  };

  const toggleSemesterButton = (semesterButton) => {
    setSelectedSemesterButton(semesterButton === selectedSemesterButton ? null : semesterButton);
  };

  return (
    <div className="it-page">
      <header className="department-page-header">
        <h1>ECONOMICS Department</h1>
      </header>
      <div className="semester-buttons">
        {['Fall', 'Spring'].map((semester) => (
          <button
            key={semester}
            onClick={() => toggleSemester(semester)}
            className={selectedSemester === semester ? 'active' : ''}
          >
            {semester}
          </button>
        ))}
      </div>
      {selectedSemester && (
        <div className="semester-buttons">
          {subjectsBySemester[selectedSemester].map((semesterButton) => (
            <div key={semesterButton} className="dropdown-container">
              <button
                onClick={() => toggleSemesterButton(semesterButton)}
                className={selectedSemesterButton === semesterButton ? 'active' : ''}
              >
                {semesterButton}
              </button>
              {selectedSemesterButton === semesterButton && (
                <ul className="subject-list">
                  {selectedSemester === 'Fall'
                    ? subjectsBySemester1[semesterButton].map((subject, index) => (
                        <li key={index}>{subject}</li>
                      ))
                    : subjectsBySemester2[semesterButton].map((subject, index) => (
                        <li key={index}>{subject}</li>
                      ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EcoPage;
