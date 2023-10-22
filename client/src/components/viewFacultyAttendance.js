import React, { useState } from 'react';
import './../styles/viewFacultyAttendance.css';

const PrincipalAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([
    { facultyName: 'John Doe', attendance: 'Present', department: 'Mathematics' },
    { facultyName: 'Jane Smith', attendance: 'Absent', department: 'English' },
    { facultyName: 'Michael Johnson', attendance: 'Present', department: 'Science' },
    // Add more faculty attendance data here
  ]);

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="main">
      <div className="principal-attendance">
        <h2>Faculty Attendance</h2>
        <p><strong>Date:</strong>{currentDate}</p>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Faculty Name</th>
              <th>Attendance</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr key={index}>
                <td>{record.facultyName}</td>
                <td>{record.attendance}</td>
                <td>{record.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrincipalAttendance;
