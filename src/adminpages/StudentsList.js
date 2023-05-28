import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';

export default function StudentsList() {

    const [students, setStudents] = useState([]);



    useEffect(() => {
        loadStudents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const token = localStorage.getItem('token');
    const loadStudents = async () => {
        const result = await axios.get("http://localhost:8080/replica/v1/students", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setStudents(result.data.data.content);
    };

    const deleteStudent = async (id,username) => {
        await axios.delete(`http://localhost:8080/replica/v1/students/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        await axios.delete(`http://localhost:8080/replica/v1/users/username/${username}`, {
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
                                            <Link className="btn btn-primary mx-2" to={`/view_student_admin/${student.id}`}>Detalles</Link>
                                            <Link className="btn btn-outline-primary mx-2" to={`/edit_student_admin/${student.id}`}>Editar</Link>
                                            <button className="btn btn-danger mx-2" onClick={() => deleteStudent(student.id,student.username)}>Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <Link class="btn btn-outline-success" to="/add_student">Añadir Alumno</Link>
                </div>

            </div>
            <Footer />
        </div>
    )
}
