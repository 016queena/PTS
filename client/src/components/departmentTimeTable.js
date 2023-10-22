// DepartmentTimetable.js

import React from 'react';
import './../styles/departmentTimeTable.css';

const DepartmentTimetable = () => {
  const timetable = [
    {
      className: 'BSIT(FYDP) Term - I',
      subjects: [
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
      ],
    },
    {
      className: 'BSIT(FYDP) Term - III',
      subjects: [
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
      ],
    },
    {
      className: 'BSIT(FYDP) Term - V',
      subjects: [
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
      ],
    },
    {
      className: 'BSIT(FYDP) Term - VII',
      subjects: [
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
        ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
      ],
    },
  ];

  const renderTimetable = () => {
    return timetable.map((classData, index) => (
      <div key={index} className="class-timetable">
        <h2>{classData.className}</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              {classData.subjects[0].map((subject, subjectIndex) => (
                <th key={subjectIndex}>{subject}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {generateTimings().map((timing, timingIndex) => (
              <tr key={timingIndex}>
                <td>{timing}</td>
                {classData.subjects.map((subjects, subjectIndex) => (
                  <td key={subjectIndex}>{subjects[timingIndex]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ));
  };

  const generateTimings = () => {
    const timings = [];
    let currentTime = new Date('2023-01-01T08:30:00');

    for (let i = 0; i < 6; i++) {
      const startTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      currentTime.setMinutes(currentTime.getMinutes() + 90);
      const endTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      timings.push(`${startTime} - ${endTime}`);
      if (i === 2) {
        // Add recess
        currentTime.setMinutes(currentTime.getMinutes() + 30);
      }
    }

    return timings;
  };

  return (
    <div className="department-timetable">
      <h1>IT Department Timetable</h1>
      {renderTimetable()}
    </div>
  );
};

export default DepartmentTimetable;
