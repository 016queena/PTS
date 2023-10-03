import React, { useState } from 'react';
import './../styles/addParent.css';

const ParentForm = () => {
  const [parentInfo, setParentInfo] = useState({
    studentName: '',
    studentRollNo: '',
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhoneNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setParentInfo({
      ...parentInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., store the parentInfo in an array or send it to a backend server.
    console.log('Parent Info:', parentInfo);
    // Clear the form after submission
    setParentInfo({
      studentName: '',
      studentRollNo: '',
      parentFirstName: '',
      parentLastName: '',
      parentEmail: '',
      parentPhoneNumber: '',
    });
  };

  return (
    <div className="parent-form-container">
      <h2>Register Parent</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="studentName"
            value={parentInfo.studentName}
            onChange={handleInputChange}
            placeholder="Student's Name"
            required
          />
          <input
            type="text"
            name="studentRollNo"
            value={parentInfo.studentRollNo}
            onChange={handleInputChange}
            placeholder="Student's Roll No"
            required
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="parentFirstName"
            value={parentInfo.parentFirstName}
            onChange={handleInputChange}
            placeholder="Parent's First Name"
            required
          />
          <input
            type="text"
            name="parentLastName"
            value={parentInfo.parentLastName}
            onChange={handleInputChange}
            placeholder="Parent's Last Name"
            required
          />
        </div>
        <input
          type="email"
          name="parentEmail"
          value={parentInfo.parentEmail}
          onChange={handleInputChange}
          placeholder="Parent's Email"
          required
        />
        <input
          type="tel"
          name="parentPhoneNumber"
          value={parentInfo.parentPhoneNumber}
          onChange={handleInputChange}
          placeholder="Parent's Phone Number"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ParentForm;
