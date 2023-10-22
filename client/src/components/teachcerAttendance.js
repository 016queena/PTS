import React, { useState, useEffect } from 'react';
import './../teacher panel/teacherAttendance.css';
import axios from 'axios';

const AttendancePage = ({ teacherId = 12345, teacherName = 'urooj kanwal' }) => {
  const [date, setDate] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('present');

  // Set the current date when the component mounts
  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10);
    setDate(currentDate);
  }, []);

  const handleAttendanceUpload = async () => {
    try {
      // Replace 'your_backend_api_endpoint' with the actual API endpoint for attendance upload
      await axios.post('your_backend_api_endpoint/attendance/upload', {
        teacherId,
        teacherName,
        date,
        attendanceStatus,
      });
      // Handle successful attendance upload, e.g., show success message to the user
    } catch (error) {
      // Handle attendance upload error, e.g., show error message to the user
    }
  };

  return (
    <div>
      <h2>Faculty Attendance</h2>
      <div className='attendanceForm'>
        <div className="teacher-info">
          <p>
            <strong>Teacher Name: </strong> <span>{teacherName}</span>
          </p>
          <p>
            <strong>Teacher ID: </strong> <span>{teacherId}</span>
          </p>
          </div>
          <div>
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label>Attendance Status:</label>
            <select value={attendanceStatus} onChange={(e) => setAttendanceStatus(e.target.value)}>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
              <option value="leave">Leave</option>
              {/* Add more attendance statuses if needed */}
            </select>
            <button onClick={handleAttendanceUpload}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
