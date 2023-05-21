import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/AdminHome';
import Login from './login/Login';
import Navbar from './layout/Navbar';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home" element={<PrivateRoute />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (!isAuthenticated) {
    
    return <Navigate to="/login" replace />;
    
  }

  // Agrega la lógica de autorización aquí
  // Ejemplo: Solo se permite acceso a usuarios con el rol 'admin'
  if (userRole !== 'ROLE_ADMIN') {
    
    return <Navigate to="/login" replace />;
    
  }

  return <Home />;
};


export default App;
