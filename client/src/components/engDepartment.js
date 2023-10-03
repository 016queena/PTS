import React, { useState } from 'react';
import './../teacher panel/ITdepartment.css';
import { Link } from 'react-router-dom'; // Import Link

const EngDepartmentPage = () => {
  const [showDropdown, setShowDropdown] = useState('');

  const subjectsBySemester = {
    '1st Semester': ['Introduction to Grammar', 'Programming Fundamentals', 'Programming Fundamentals (Lab)', '	Introduction to Information and CommunicationTechnologies', '	Calculus and Analytical Geomatry', '	Basic Electronics'],
    '2nd Semester': ['Introduction to Economics', 'English Language Skills', 'Islamic Studies', 'Object Oriented Programming', 'Object Oriented Programming (Lab)', 'Digital Logic Design', 'Information Systems'],
    '3rd Semester': ['Discrete Structures', 'Multimedia System & Design', 'Data Structure and Algorithms', 'Data Structure and Algorithms Lab', 'Web Systems & Technologies', 'Pakistan Studies', 'Introduction to Psychology-I'],
    '4th Semester': ['Mobile App Development', 'Operating Systems', 'Database Management Systems'],
    '5th Semester': ['Artificial Intelligence', 'Information Security', 'Web Services'],
    '6th Semester': ['Big Data Analytics', 'Cloud Computing', 'Software Testing'],
    '7th Semester': ['Internet of Things', 'Machine Learning', 'Blockchain Technology'],
    '8th Semester': ['Cybersecurity', 'Natural Language Processing', 'Computer Vision'],
  };

  const toggleDropdown = (semester) => {
    setShowDropdown(showDropdown === semester ? '' : semester);
  };

  return (
    <div className="it-department-page">
      <h1>English Department</h1>
      <div className="button-container">
        <div className="row">
          {Object.keys(subjectsBySemester).map((semester) => (
            <div className="semester-button" key={semester}>
              <button onClick={() => toggleDropdown(semester)}>{semester}</button>
              {showDropdown === semester && (
                <ul className="dropdown-menu">
                  {subjectsBySemester[semester].map((subject) => (
                    <li key={subject}>
                      {/* Add Link component to navigate to CourseOutline */}
                      <Link to="/teacher-panel/course-outline">{subject}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngDepartmentPage;
