import React, { useState } from 'react';
import './../styles/addTeacherInformation.css';

const PrincipalForm = () => {
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

  const [emailError, setEmailError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTeacherInfo({
      ...teacherInfo,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(teacherInfo.email)) {
      setEmailError('Invalid email format');
      return;
    }

    // Handle the form submission here, e.g., storing teacherInfo or sending it to a server
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

    // Clear email error message
    setEmailError('');
  };

  return (
    <div className='teacher-info-form'>
      <div className='teacher-info'>
        <form onSubmit={handleSubmit}>
          <h2>Add Principal's Information</h2>
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
              {emailError && <p className="error-message">{emailError}</p>}
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

export default PrincipalForm;
