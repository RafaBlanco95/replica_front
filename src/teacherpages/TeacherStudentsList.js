import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import Footer from '../layout/FooterTeacher';
import Navbar from '../layout/NavbarTeacher';

export default function TeacherStudentsList() {

    const [students, setStudents] = useState([]);

    const [page, setPage] = useState(0); // Página actual
  const [totalPages, setTotalPages] = useState(0); // Total de páginas

    useEffect(() => {
        loadStudents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const loadStudents = async () => {
        const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/students/teachers/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                page: page, // Página actual
                size: 5 // Tamaño de página (10 items por página en este ejemplo)
              }
        });
        setStudents(result.data.data.content);
        setTotalPages(result.data.data.page.totalPages);
    };

    const deleteStudent = async (id,username) => {
        await axios.delete(`https://replicarepo-production.up.railway.app/replica/v1/students/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        await axios.delete(`https://replicarepo-production.up.railway.app/replica/v1/users/username/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        loadStudents()
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="py-4">
                    <h3 className='mb-3'><b>Lista de Alumnos</b></h3>

                    <table class="table shadow">
                        <thead>
                            <tr class="table-primary">
                                <th scope="col">Nº Alumno</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Email</th>
                                <th scope="col">Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{student.id}</th>
                                        <td>{student.name}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.login_user.email}</td>
                                        <td>
                                            <Link className="btn btn-primary mx-2" to={`/view_student_teacher/${student.id}`}>Detalles</Link>
                                            
                                            <button className="btn btn-danger mx-2" onClick={() => deleteStudent(student.id,student.username)}>Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-primary my-2" disabled={page === 0} onClick={() => setPage(page - 1)}>
                Anterior
              </button>
              <button className="btn btn-primary my-2" disabled={page === totalPages - 1} onClick={() => setPage(page + 1)}>
                Siguiente
              </button>
                </div>
               
            </div>
            <Footer />
        </div>
    )
}
