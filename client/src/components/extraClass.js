import React, { useState } from 'react';
import './extraClass.css';

const ScheduleForm = () => {
  const [teacherAvailable, setTeacherAvailable] = useState(false);
  const [studentAvailable, setStudentAvailable] = useState(false);
  const [extraClassScheduled, setExtraClassScheduled] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check teacher and student availability here based on their timetables
    // If both are available, set extraClassScheduled to true
    if (teacherAvailable && studentAvailable) {
      setExtraClassScheduled(true);
      // Perform any scheduling actions or API calls here
    }
  };

  return (
    <div className='extraClass'>
        <div className="schedule-form">
        <h2>Schedule an Extra Class</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Teacher Available:
            <input
                type="checkbox"
                checked={teacherAvailable}
                onChange={() => setTeacherAvailable(!teacherAvailable)}
            />
            </label>
            <label>
            Student Available:
            <input
                type="checkbox"
                checked={studentAvailable}
                onChange={() => setStudentAvailable(!studentAvailable)}
            />
            </label>
            <button type="submit">Schedule Extra Class</button>
            {extraClassScheduled && <p>Extra class scheduled successfully!</p>}
        </form>
        </div>
    </div>
    
  );
};

export default ScheduleForm;
