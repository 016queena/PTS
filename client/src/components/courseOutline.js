import React, { useState, useEffect } from 'react';
import './../styles/courseOutline.css';

const CourseOutline = () => {
  // Initialize the completed state with data from Local Storage or an array of false values
  const [completed, setCompleted] = useState(() => {
    const savedCompletedData = localStorage.getItem('completed');
    return savedCompletedData ? JSON.parse(savedCompletedData) : Array(32).fill(false);
  });

  // Load completed data from Local Storage on component mount
  useEffect(() => {
    const savedCompletedData = localStorage.getItem('completed');
    if (savedCompletedData) {
      setCompleted(JSON.parse(savedCompletedData));
    }
  }, []);

  // Save completed data to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [completed]);

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
    <div className="outline-page">
      <div className="course-outline">
        <h2>Course Outline</h2>
        <table className='header-info'>
          <tr>
            <th>course title</th>
            <td>Introduction to grammer</td>
          </tr>
          <tr>
            <th>course code</th>
            <td>ENG-101</td>
          </tr>
          <tr>
            <th>credit hours</th>
            <td>1</td>
          </tr>

          <tr>
            <th>course description</th>
            <td> Along with many others following are fundamentals learning outcomes for students that are expected through this course<br/>
                •	The SaaS and PaaS topics covered in the course will familiarize students with the use of vendor-maintained applications and processes available on the Cloud on a metered on-demand basis in multi-tenant environments.<br/>
                •	Introduce inside datacenter traffic analysis base on network infrastructure.</td>
          </tr>
          
          <tr>
            <th>text book</th>
            <td>•	(T) Cloud Computing: Concepts, Technology & Architecture by Thomas Erl</td>
          </tr>

          <tr>
            <th>Recommended books</th>
            <td>•	Virtualization form desktop to the Enterprise, Chris Wolf and Erick M. Halter, Latest Edition.
                <br/>  •	The Definition Guide to the Xen Hypervisor, David Chisnall, Latest Edition.
                <br/>  •	Windows Server 2012 Hyper-V Installation and Configuration Guide, Aidan Finn, Michel Luescher, Patrick Lownds, 2013.
                <br/>  •	Xen Hypervisor Case Study- Designing Embedded Virtualized Intel Architecture Platforms.
                <br/>  •	Handbook of Virtual Environments: Design, Implementation and Applications (Human Factors and Ergonomics) edited by Kay M Stanney, Lawrence Erlbaum Associates Virtual Reality Technology by GRIGORE
            </td>
          </tr>

          <tr>
            <th>pre-requisites</th>
            <td>Pre-requisites:	Programming Fundamentals, Computer Networks</td>
          </tr>

        </table>
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
