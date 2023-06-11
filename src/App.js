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
import Internships from './studentpages/internships';
import ViewInternshipDetail from './studentpages/ViewInternshipDetail';
import AddWorkdayToInternshipStudent from './studentpages/AddWorkdayToInternshipStudent';
import InternshipWorkdayDetailStudent from './studentpages/InternshipWorkdayDetailStudent';
import FinalProject from './studentpages/FinalProject';
import AddMeetingToFinalProjectStudent from './studentpages/AddMeetingToFinalProjectStudent';
import FinalProjectMeetingDetailStudent from './studentpages/FinalProjectMeetingDetailStudent';
import TeacherStudentsList from './teacherpages/TeacherStudentsList';
import ViewStudentTeacher from './teacherpages/ViewStudentTeacher';
import TeacherStudentInternshipDetail from './teacherpages/TeacherStudentInternshipDetail';
import TeacherStudentInternshipWorkdayDetail from './teacherpages/TeacherStudentInternshipWorkdayDetail';
import TeacherStudentFinalProjectDetail from './teacherpages/TeacherStudentFinalProjectDetail';
import TeacherAddMeetingToFinalProject from './teacherpages/TeacherAddMeetingToFinalProject';
import TeacherStudentFinalProjectMeetingDetail from './teacherpages/TeacherStudentFinalProjectMeetingDetail';
import EmployeeInternships from './employeepages/EmployeeInternships';
import EmployeeInternshipDetail from './employeepages/EmployeeInternshipDetail';
import ViewStudentEmployee from './employeepages/ViewStudentEmployee';
import EmployeeInternshipWorkdayDetail from './employeepages/EmployeeInternshipWorkdayDetail';





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
        <Route path="/complete_student/teacher/:centerName/:createdUser" element={<AddTeacherToStudent />} />
        <Route path="/complete_student/employee/:centerName/:createdUser" element={<AddEmployeeToStudent />} />
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
        <Route path="/internships" element={<Internships />} />
        <Route path="/internships/:id" element={<ViewInternshipDetail />} />
        <Route path="/internships/:id/workday/:id2" element={<InternshipWorkdayDetailStudent />} />
        <Route path="/internships/:id/add_workday" element={<AddWorkdayToInternshipStudent />} />
        <Route path="/final_project" element={<FinalProject />} />
        <Route path="/final_project/:id/add_meeting" element={<AddMeetingToFinalProjectStudent />} />
        <Route path="/final_project/:id/meeting/:id2" element={<FinalProjectMeetingDetailStudent />} />
        <Route path="/teacher_students" element={<TeacherStudentsList />} />
        <Route path="/view_student_teacher/:id" element={<ViewStudentTeacher />} />
        <Route path="/teacher/student/:id/internship/:id2" element={<TeacherStudentInternshipDetail />} />
        <Route path="/teacher/student/:id/internship/:id2/workday/:id3" element={<TeacherStudentInternshipWorkdayDetail />} />
        <Route path="/teacher/student/:id/final_project/:id2" element={<TeacherStudentFinalProjectDetail />} />
        <Route path="/teacher/student/:id/final_project/:id2/add_meeting" element={<TeacherAddMeetingToFinalProject />} />
        <Route path="/teacher/student/:id/final_project/:id2/meeting/:id3" element={<TeacherStudentFinalProjectMeetingDetail />} />
        <Route path="/employee_internships" element={<EmployeeInternships />} />
        <Route path="/employee/internships/:id" element={<EmployeeInternshipDetail />} />
        <Route path="/employee/internships/:id2/student/:id" element={<ViewStudentEmployee />} />
        <Route path="/employee/internships/:id/workday/:id2" element={<EmployeeInternshipWorkdayDetail />} />
        
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
