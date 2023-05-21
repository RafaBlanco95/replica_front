import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/AdminHome';
import Login from './login/Login';
import StudentHome from './pages/StudentHome';
import EmployeeHome from './pages/EmployeeHome';
import TeacherHome from './pages/TeacherHome';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute />} />
        <Route path="/home_student" element={<StudentHome />}/>
        <Route path="/home_teacher" element={<TeacherHome />}/>
        <Route path="/home_employee" element={<EmployeeHome />}/>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (!isAuthenticated) {
    
    return <Navigate to="/login" />;
    
  }

  
  if (userRole === 'ROLE_STUDENT') {
    
    return <Navigate to="/home_student" />;
    
  }

  if (userRole === 'ROLE_TEACHER') {
    
    return <Navigate to="/home_teacher" />;
    
  }

  if (userRole === 'ROLE_EMPLOYEE') {
    
    return <Navigate to="/home_employee" />;
    
  }

  if (userRole === 'ROLE_ADMIN') {
    
    return <Home/>;
    
  }



  return <Home />;
};


export default App;
