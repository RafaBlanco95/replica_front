import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';

export default function AddTeacherToStudent() {

    const [teachers, setTeachers] = useState([]);
    let navigate = useNavigate()
    const { createdUser } = useParams();

    useEffect(() => {
        loadTeachers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const token = localStorage.getItem('token');
    const loadTeachers = async () => {
        const result = await axios.get("http://localhost:8080/replica/v1/teachers", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setTeachers(result.data.data.content);
    };

    const associateTeacher = async (id) => {
        
        await axios.patch(`http://localhost:8080/replica/v1/students/${createdUser}/teachers/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        navigate(`/complete_student/internship/${username}`)
        loadTeachers()
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="py-4">
                    <h3 className='mb-3'><b>Seleccione el profesor a cargo del nuevo alumno</b></h3>

                    <table class="table shadow">
                        <thead>
                            <tr class="table-primary">
                                <th scope="col">Nº Profesor</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Email</th>
                                <th scope="col">Centro</th>
                                <th scope="col">Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                teachers.map((teacher, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{teacher.id}</th>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.lastName}</td>
                                        <td>{teacher.login_user.email}</td>
                                        <td>{teacher.center}</td>
                                        <td>
                                            
                                            <button className="btn btn-danger mx-2" onClick={() => associateTeacher(teacher.id)}>Seleccionar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <Link class="btn btn-outline-success" to="/add_teacher">Añadir Profesor</Link>
                </div>

            </div>
            <Footer />
        </div>
    )
}
