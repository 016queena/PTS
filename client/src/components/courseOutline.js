import React, { useState } from 'react';
import './../styles/courseOutline.css';
const CourseOutline = () => {
  const [completed, setCompleted] = useState(Array(32).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = !completed[index];
    setCompleted(updatedCompleted);
  };

  const calculateCompletionPercentage = () => {
    const totalLectures = completed.length;
    const completedLectures = completed.filter((lecture) => lecture).length;
    return Math.round((completedLectures / totalLectures) * 100);
  };

  const courseData = [
    // Week 1
    { week: 1, lecture: 1, topic: 'Introduction to React' },
    { week: 1, lecture: 2, topic: 'Components and Props' },
    // Add more lectures for Week 1

    // Week 2
    { week: 2, lecture: 1, topic: 'State and Lifecycle' },
    { week: 2, lecture: 2, topic: 'Handling Events' },
    // Add more lectures for Week 2

    // Week 3
    { week: 3, lecture: 1, topic: 'State Management' },
    { week: 3, lecture: 2, topic: 'Hooks' },
    // Add more lectures for Week 3

    // ... Continue with the remaining weeks and lectures
    // Week 4
    { week: 4, lecture: 1, topic: 'Forms and Validation' },
    { week: 4, lecture: 2, topic: 'Working with APIs' },
    // Add more lectures for Week 4

    // Week 5
    { week: 5, lecture: 1, topic: 'React Router' },
    { week: 5, lecture: 2, topic: 'Redux' },

    { week: 6, lecture: 1, topic: 'React Router' },
    { week: 6, lecture: 2, topic: 'Redux' },

    { week: 7, lecture: 1, topic: 'React Router' },
    { week: 7, lecture: 2, topic: 'Redux' },

    { week: 8, lecture: 1, topic: 'React Router' },
    { week: 8, lecture: 2, topic: 'Redux' },

    { week: 9, lecture: 1, topic: 'React Router' },
    { week: 9, lecture: 2, topic: 'Redux' },

    { week: 10, lecture: 1, topic: 'React Router' },
    { week: 10, lecture: 2, topic: 'Redux' },

    { week: 11, lecture: 1, topic: 'React Router' },
    { week: 11, lecture: 2, topic: 'Redux' },

    { week: 12, lecture: 1, topic: 'React Router' },
    { week: 12, lecture: 2, topic: 'Redux' },

    { week: 13, lecture: 1, topic: 'React Router' },
    { week: 13, lecture: 2, topic: 'Redux' },

    { week: 14, lecture: 1, topic: 'React Router' },
    { week: 14, lecture: 2, topic: 'Redux' },

    { week: 15, lecture: 1, topic: 'React Router' },
    { week: 15, lecture: 2, topic: 'Redux' },
    // Add more lectures for Week 5

    // ... Continue with the remaining weeks and lectures

    // Week 16
    { week: 16, lecture: 1, topic: 'Project Presentation' },
    { week: 16, lecture: 2, topic: 'Project Presentation' },
  ];

  return (
    <div className='outline-page'>
      <div className="course-outline">
        <h2>Course Outline</h2>
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Lecture</th>
              <th>Topics</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((lecture, index) => (
              <tr key={index}>
                {index === 0 || courseData[index - 1].week !== lecture.week ? (
                  <td rowSpan={courseData.filter(item => item.week === lecture.week).length}>{lecture.week}</td>
                ) : null}
                <td>{lecture.lecture}</td>
                <td>{lecture.topic}</td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      checked={completed[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    Completed
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="completion-percentage">
          <span>Completion Percentage:</span>
          <span>{calculateCompletionPercentage()}%</span>
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;
