import React, { useState } from 'react';
import './../styles/addTeacherInformation.css';

const StudentForm = () => {
  const [teacherInfo, setTeacherInfo] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    age: '',
    gender: '',
    religion: '',
    cnic: '',
    address: '',
    mobileNo: '',
    email: '',
    nationality: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTeacherInfo({
      ...teacherInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., store the teacherInfo in an array or send it to a backend server.
    console.log('Teacher Info:', teacherInfo);
    // Clear the form after submission
    setTeacherInfo({
      firstName: '',
      lastName: '',
      fatherName: '',
      age: '',
      gender: '',
      religion: '',
      cnic: '',
      address: '',
      mobileNo: '',
      email: '',
      nationality: '',
    });
  };

  return (
    <div className='teacher-info-form'>
      <div className='teacher-info'>
        <form onSubmit={handleSubmit}>
          <h2>Add Student's Information</h2>
          <div className='faculty-form'>
            <div className='faculty-form-item'>
              <input
                type="text"
                name="firstName"
                value={teacherInfo.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className='faculty-form-item'>
              <input
                type="text"
                name="lastName"
                value={teacherInfo.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className='faculty-form'>
            <div className='faculty-form-item'>
              <input
                type="text"
                name="fatherName"
                value={teacherInfo.fatherName}
                onChange={handleInputChange}
                placeholder="Father's Name"
                required
              />
            </div>
            <div className='faculty-form-item'>
              <input
                type="text"
                name="religion"
                value={teacherInfo.religion}
                onChange={handleInputChange}
                placeholder="Religion"
                required
              />
            </div>
          </div>
          <div className='faculty-form'>
            <div className='faculty-form-item'>
              <input
                type="number"
                name="age"
                value={teacherInfo.age}
                onChange={handleInputChange}
                placeholder="Age"
                required
              />
            </div>
            <div className='faculty-form-item'>
              <select
                name="gender"
                value={teacherInfo.gender}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className='faculty-form'>
            <div className='faculty-form-item'>
              <input
                type="text"
                name="cnic"
                value={teacherInfo.cnic}
                onChange={handleInputChange}
                placeholder="CNIC"
                required
              />
            </div>
            <div className='faculty-form-item'>
              <input
                type="email"
                name="email"
                value={teacherInfo.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className='faculty-form'>
            <div className='faculty-form-item'>
              <input
                type="text"
                name="mobileNo"
                value={teacherInfo.mobileNo}
                onChange={handleInputChange}
                placeholder="Mobile No"
                required
              />
            </div>            
            <div className='faculty-form-item'>
              <input
                type="text"
                name="nationality"
                value={teacherInfo.nationality}
                onChange={handleInputChange}
                placeholder="Nationality"
                required
              />
            </div>
          </div>
          <div className='faculty-form-item'>
            <textarea
              name="address"
              value={teacherInfo.address}
              onChange={handleInputChange}
              placeholder="Address"
              required
            />
          </div>        
          <button type="submit">Add Teacher</button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
