import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';

export default function TeachersList() {

    const [teachers, setTeachers] = useState([]);

    const [page, setPage] = useState(0); // Página actual
    const [totalPages, setTotalPages] = useState(0); // Total de páginas

    useEffect(() => {
        loadTeachers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const token = localStorage.getItem('token');
    const loadTeachers = async () => {
        const result = await axios.get("https://replicarepo-production.up.railway.app/replica/v1/teachers",  {
            params: {
              page: page, // Página actual
              size: 5 // Tamaño de página (10 items por página en este ejemplo)
            }
          });
        setTeachers(result.data.data.content);
        setTotalPages(result.data.data.page.totalPages);
    };

    const deleteTeacher = async (id,username) => {
        await axios.delete(`https://replicarepo-production.up.railway.app/replica/v1/teachers/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        await axios.delete(`https://replicarepo-production.up.railway.app/replica/v1/users/username/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        loadTeachers()
    }
 
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="py-4">
                    <h3 className='mb-3'><b>Lista de Profesores</b></h3>

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
                                            <Link className="btn btn-primary mx-2" to={`/view_teacher_admin/${teacher.id}`}>Detalles</Link>
                                            <Link className="btn btn-outline-primary mx-2" to={`/edit_teacher_admin/${teacher.id}`}>Editar</Link>
                                            <button className="btn btn-danger mx-2" onClick={() => deleteTeacher(teacher.id,teacher.username)}>Eliminar</button>
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
                    <Link class="btn btn-outline-success mx-2" to="/add_teacher">Añadir Profesor</Link>
                </div>

            </div>
            <Footer />
        </div>
    )
}
