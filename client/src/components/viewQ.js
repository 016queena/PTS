import React, { useEffect, useState } from 'react';
import './viewQ.css'; // Import the CSS file for styling
import axios from 'axios';

const StudentDashboard = ({ studentId }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [assignments, setAssignments] = useState([]);  
  const [srNO, setsrNo] = useState([]);
  const [deadline, setDeadline] = useState([]);

  useEffect(() => {
    // Fetch quizzes and assignments data from the backend API
    // Replace 'your_backend_api_endpoint' with the actual API endpoint to retrieve data for the student
    axios.get(`your_backend_api_endpoint/student/${studentId}/quizzes`)
      .then((response) => {
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching quizzes data:', error);
      });

    axios.get(`your_backend_api_endpoint/student/${studentId}/assignments`)
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching assignments data:', error);
      });
  }, [studentId]);

  return (
    <div className="student-dashboard">
      <h2>Welcome, Student!</h2>
      <div className="section">
        <h3>Quizzes:</h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Topic name</th>
                <th>Marks</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map((quiz) => (
                <tr key={quiz.id}>
                  <td>{quiz.quizName}</td>
                  <td>{quiz.marks}</td>
                  <td>{quiz.srNo}</td>
                  <td>{quiz.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h3>Assignments:</h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Topic name</th>
                <th>Marks</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.srNo}</td>
                  <td>{assignment.assignmentName}</td>
                  <td>{assignment.marks}</td>
                  <td>{assignment.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
