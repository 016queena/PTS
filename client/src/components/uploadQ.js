import React, { useState } from 'react';
import './uploadQ.css'; // You can create a separate CSS file for styling if needed
import axios from 'axios';

const UploadQuiz = () => {
  const [quizName, setQuizName] = useState('');
  const [quizDate, setQuizDate] = useState('');
  const [assignmentName, setAssignmentName] = useState('');
  const [dailyTaskDate, setTaskDate] = useState('');
  const [dailyTaskName, setTaskName] = useState('');
  const [assignmentDate, setAssignmentDate] = useState('');
  const [marks, setMarks] = useState('');

  const handleQuizUpload = async () => {
    try {
      // Replace 'your_backend_api_endpoint' with the actual API endpoint for quiz upload
      await axios.post('your_backend_api_endpoint/upload/quiz', {
        quizName,
        quizDate,
        marks,
      });
      // Handle successful quiz upload, e.g., show success message to the teacher
    } catch (error) {
      // Handle quiz upload error, e.g., show error message to the teacher
    }
  };

  const handleAssignmentUpload = async () => {
    try {
      // Replace 'your_backend_api_endpoint' with the actual API endpoint for assignment upload
      await axios.post('your_backend_api_endpoint/upload/assignment', {
        assignmentName,
        assignmentDate,
        marks,
      });
      // Handle successful assignment upload, e.g., show success message to the teacher
    } catch (error) {
      // Handle assignment upload error, e.g., show error message to the teacher
    }
  };
    const handleTaskUpload = async () => {
        try {
          // Replace 'your_backend_api_endpoint' with the actual API endpoint for assignment upload
          await axios.post('your_backend_api_endpoint/upload/assignment', {
            dailyTaskName,
            dailyTaskDate,
            marks,
          });
          // Handle successful assignment upload, e.g., show success message to the teacher
        } catch (error) {
          // Handle assignment upload error, e.g., show error message to the teacher
        }
  };

  return (
    <div className="teacher-panel">
      <h2>Teacher Panel - Upload Quizzes and Assignments</h2>

      <div className="quiz-upload">
        <h3>Upload Quiz</h3>
        <input
          type="text"
          placeholder="Quiz Name"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Quiz Date"
          value={quizDate}
          onChange={(e) => setQuizDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button onClick={handleQuizUpload}>Upload Quiz</button>
      </div>

      <div className="assignment-upload">
        <h3>Upload Assignment</h3>
        <input
          type="text"
          placeholder="Assignment Name"
          value={assignmentName}
          onChange={(e) => setAssignmentName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Assignment Date"
          value={assignmentDate}
          onChange={(e) => setAssignmentDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button onClick={handleAssignmentUpload}>Upload Assignment</button>
      </div>

      <div className="dailyTask-upload">
        <h3>Upload daily task</h3>
        <input
          type="text"
          placeholder="Task Name"
          value={dailyTaskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Task Date"
          value={dailyTaskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button onClick={handleTaskUpload}>Upload daily task</button>
      </div>
    </div>
  );
};

export default UploadQuiz;