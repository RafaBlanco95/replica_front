import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './homepages/AdminHome';
import Login from './login/Login';
import StudentHome from './homepages/StudentHome';
import EmployeeHome from './homepages/EmployeeHome';
import TeacherHome from './homepages/TeacherHome';
import AdminProfile from './profiles/AdminProfile';
import StudentProfile from './profiles/StudentProfile';
import EmployeeProfile from './profiles/EmployeeProfile';
import TeacherProfile from './profiles/TeacherProfile';
import EditStudent from './profiles/edit/EditStudent';
import EditTeacher from './profiles/edit/EditTeacher';
import EditEmployee from './profiles/edit/EditEmployee';
import EditAdmin from './profiles/edit/EditAdmin';
import StudentsList from './adminpages/StudentsList';
import EditStudentAdmin from './adminpages/EditStudentAdmin';
import ViewStudentAdmin from './adminpages/ViewStudentAdmin';
import StudentInternshipDetail from './adminpages/StudentInternshipDetail';
import TeachersList from './adminpages/TeachersList';
import EditTeacherAdmin from './adminpages/EditTeacherAdmin';
import ViewTeacherAdmin from './adminpages/ViewTeacherAdmin';
import EmployeeList from './adminpages/EmployeeList';
import EditEmployeeAdmin from './adminpages/EditEmployeeAdmin';
import ViewEmployeeAdmin from './adminpages/ViewEmployeeAdmin';
import AddStudent from './adminpages/AdminCreateStudent';
import AddInternshipToStudent from './adminpages/AddInternshipToStudent';
import AddTeacherToStudent from './adminpages/AddTeacherToStudent';
import AddEmployeeToStudent from './adminpages/AddEmployeeToStudent';
import AddFinalProjectToStudent from './adminpages/AddFinalProjectToStudent';
import AddTeacher from './adminpages/AdminCreateTeacher';
import AddEmployee from './adminpages/AdminCreateEmployee';
import CreateUsers from './adminpages/CreateUsers';
import InternshipWorkdayDetail from './adminpages/InternshipWorkdayDetail';
import StudentFinalProjectDetail from './adminpages/StudentFinalProjectDetail';
import FinalProjectMeetingDetail from './adminpages/FinalProjectMeetingDetail';
import AddMeetingToFinalProject from './adminpages/AddMeetingToFinalProject';
import AddWorkdayToInternship from './adminpages/AddWorkdayToInternship';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute />} />
        <Route path="/home_student" element={<StudentHome />} />
        <Route path="/home_teacher" element={<TeacherHome />} />
        <Route path="/home_employee" element={<EmployeeHome />} />
        <Route path="/admin_profile" element={<AdminProfile />} />
        <Route path="/student_profile" element={<StudentProfile />} />
        <Route path="/employee_profile" element={<EmployeeProfile />} />
        <Route path="/teacher_profile" element={<TeacherProfile />} />
        <Route path="/edit_student/:id" element={<EditStudent />} />
        <Route path="/edit_teacher/:id" element={<EditTeacher />} />
        <Route path="/edit_employee/:id" element={<EditEmployee />} />
        <Route path="/edit_admin/:id" element={<EditAdmin />} />
        <Route path="/students_list" element={<StudentsList />} />
        <Route path="/teachers_list" element={<TeachersList />} />
        <Route path="/employees_list" element={<EmployeeList />} />
        <Route path="/add_student" element={<AddStudent />} />
        <Route path="/add_teacher" element={<AddTeacher />} />
        <Route path="/add_employee" element={<AddEmployee />} />
        <Route path="/add_users" element={<CreateUsers />} />
        <Route path="/complete_student/internship/:createdUser" element={<AddInternshipToStudent />} />
        <Route path="/complete_student/teacher/:createdUser" element={<AddTeacherToStudent />} />
        <Route path="/complete_student/employee/:createdUser" element={<AddEmployeeToStudent />} />
        <Route path="/complete_student/final_project/:createdUser" element={<AddFinalProjectToStudent />} />
        <Route path="/edit_student_admin/:id" element={<EditStudentAdmin />} />
        <Route path="/edit_teacher_admin/:id" element={<EditTeacherAdmin />} />
        <Route path="/edit_employee_admin/:id" element={<EditEmployeeAdmin />} />
        <Route path="/view_student_admin/:id" element={<ViewStudentAdmin />} />
        <Route path="/view_teacher_admin/:id" element={<ViewTeacherAdmin />} />
        <Route path="/view_employee_admin/:id" element={<ViewEmployeeAdmin />} />
        <Route path="/student/:id/internship/:id2" element={<StudentInternshipDetail />} />
        <Route path="/student/:id/final_project/:id2" element={<StudentFinalProjectDetail />} />
        <Route path="/student/:id/internship/:id2/workday/:id3" element={<InternshipWorkdayDetail />} />
        <Route path="/student/:id/final_project/:id2/meeting/:id3" element={<FinalProjectMeetingDetail />} />
        <Route path="/student/:id/final_project/:id2/add_meeting" element={<AddMeetingToFinalProject />} />
        <Route path="/student/:id/internship/:id2/add_workday" element={<AddWorkdayToInternship />} />
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

    return <Home />;

  }


  return <Home/>;

  
};


export default App;
