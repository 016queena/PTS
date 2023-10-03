import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Welcome from './components/welcome';
import LoginPage from './components/login';
import AdminDashboard from './components/adminDashboard';
import AdminPanel from './components/admin-panel';
import ParentPanel from './components/parentPanel';
import PrincipalDashboard from './components/principalDashboard';
import PrincipalAttendance from './components/viewFacultyAttendance';
import ResetPassword from './components/resetPassword';
import ITDepartmentPage from './components/ITdepartment';
import CourseOutline from './components/courseOutline';
import ITPage from './components/dept';
import ParentForm from './components/addParent';
import StudentInfo from './components/addStudentInformation';
import TeacherForm from './components/addTeacherInformation';
import PrincipalForm from './components/principalManagement';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/components/login" element={<LoginPage/>} />
          <Route path="/components/teacherAttendance" element={<PrincipalAttendance/>} />
          <Route path="/components/resetPassword" element={<ResetPassword/>} />
          <Route path="/components/ITdepartment" element={<ITDepartmentPage/>} />
          <Route path="/components/courseOutline" element={<CourseOutline/>} />
          <Route path="/components/principalDashboard" element={<PrincipalDashboard/>} />          
          <Route path="/components/admin-panel" element={<AdminPanel/>} />
          <Route path="/components/principalManagement" element={<PrincipalForm/>} />
          <Route path="/components/addStudentInformation" element={<StudentInfo/>} />
          <Route path="/components/addTeacherInformation" element={<TeacherForm/>} />
          <Route path="/components/addParent" element={<ParentForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;