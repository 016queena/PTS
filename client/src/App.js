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
import ParentForm from './components/addParent';
import StudentInfo from './components/addStudentInformation';
import TeacherForm from './components/addTeacherInformation';
import PrincipalForm from './components/principalManagement';
import TeacherDashboard from './components/teacherPanel';
import ITPage from './components/ITdept';
import ChemPage from './components/chemDept';
import EngPage from './components/engDept';
import EcoPage from './components/ecoDept';
import MathsPage from './components/mathsDept';
import TeacherTimeTable from './components/viewTimeTable';
import DepartmentTimetable from './components/departmentTimeTable';

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
          <Route path="/components/teacherPanel" element={<TeacherDashboard/>} />
          <Route path="/components/ITdept" element={<ITPage/>} />
          <Route path="/components/chemDept" element={<ChemPage/>} />
          <Route path="/components/engDept" element={<EngPage/>} />
          <Route path="/components/ecoDept" element={<EcoPage/>} />
          <Route path="/components/mathsDept" element={<MathsPage/>} />
          <Route path="/components/viewTimeTable" element={<TeacherTimeTable/>} />
          <Route path="/components/departmentTimeTable" element={<DepartmentTimetable/>} />
          <Route path="/components/parentPanel" element={<ParentPanel/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;