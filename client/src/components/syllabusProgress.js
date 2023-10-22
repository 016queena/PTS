import React, { useState, useEffect } from 'react';
import './../principal panel/syllabusProgress.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const CourseListPage = () => {
  const [courses, setCourses] = useState([]);
  const [currentDate] = useState(new Date());

  // Fetch course data from an API or any data source
  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/courses'); // Replace with your API endpoint
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="course-list-page">
      <h2>Course List</h2>
      <p><strong>Current Date: </strong>{currentDate.toDateString()}</p>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Syllabus Progress</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.courseName}</td>
              <td>{course.courseCode}</td>
              <td>{course.syllabusProgress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseListPage;
