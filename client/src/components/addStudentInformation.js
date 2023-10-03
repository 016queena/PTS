import React, { useState } from 'react';
import './../styles/addStudentInformation.css';

const StudentInfo = () => {
  const [studentInfo, setStudentInfo] = useState({
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
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., store the studentInfo in an array or send it to a backend server.
    console.log('Student Info:', studentInfo);
    // Clear the form after submission
    setStudentInfo({
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
   <div className='add-student-info'>
    <div className='add-student'>
            <form onSubmit={handleSubmit}>
            <h2>Add Student Information</h2>
            <div className='combo'>
                  <div>
                  <input
                      type="text"
                      name="firstName"
                      value={studentInfo.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      required
                  />
                  </div>
                  <div>
                  <input
                      type="text"
                      name="lastName"
                      value={studentInfo.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      required
                  />
                  </div>
              </div>
              <div className='combo'>
                  <div>
                  <input
                      type="text"
                      name="fatherName"
                      value={studentInfo.fatherName}
                      onChange={handleInputChange}
                      placeholder="Father's Name"
                      required
                  />
                  </div>
                  <div>
                  <input
                      type="text"
                      name="religion"
                      value={studentInfo.religion}
                      onChange={handleInputChange}
                      placeholder="Religion"
                      required
                  />
                  </div>
              </div>
              <div className='combo'>
                  <div>
                  <input
                      type="number"
                      name="age"
                      value={studentInfo.age}
                      onChange={handleInputChange}
                      placeholder="Age"
                      required
                  />
                  </div>
                  <div>
                  <select
                      name="gender"
                      value={studentInfo.gender}
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
              <div className='combo'>
                  <div>
                  <input
                      type="text"
                      name="cnic"
                      value={studentInfo.cnic}
                      onChange={handleInputChange}
                      placeholder="CNIC"
                      required
                  />
                  </div>
                  <div>
                  <input
                      type="email"
                      name="email"
                      value={studentInfo.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                  />
                  </div>
              </div>
              <div className='combo'>
                  <div>
                  <input
                      type="text"
                      name="mobileNo"
                      value={studentInfo.mobileNo}
                      onChange={handleInputChange}
                      placeholder="Mobile No"
                      required
                  />
                  </div>            
                  <div>
                  <input
                      type="text"
                      name="nationality"
                      value={studentInfo.nationality}
                      onChange={handleInputChange}
                      placeholder="Nationality"
                      required
                  />
                  </div>
              </div>
              <div>
                <textarea
                  name="address"
                  value={studentInfo.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  required
                />
              </div>        
              <button type="submit">Add Student</button>
            </form>
          </div>
   </div>
  );
};

export default StudentInfo;
