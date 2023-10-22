// TeacherTimeTable.js

import React from 'react';
import './teacherTimeTable.css';

const TeachersTimeTable = () => {
  const timetable = [
    { day: 'Monday', time: '10:00 AM - 12:00 PM', subject: 'Mathematics' },
    { day: 'Tuesday', time: '9:00 AM - 11:00 AM', subject: 'English' },
    { day: 'Wednesday', time: '1:00 PM - 3:00 PM', subject: 'Science' },
    { day: 'Thursday', time: '11:00 AM - 1:00 PM', subject: 'History' },
    { day: 'Friday', time: '2:00 PM - 4:00 PM', subject: 'Geography' },
  ];

  return (
    <div className="timetable-container">
      <h2>Teacher Time Table</h2>
      <table className="timetable">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersTimeTable;
