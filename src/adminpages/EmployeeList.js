import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';

export default function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    const [page, setPage] = useState(0); // Página actual
    const [totalPages, setTotalPages] = useState(0); // Total de páginas

    useEffect(() => {
        loadEmployees();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const token = localStorage.getItem('token');
    const loadEmployees = async () => {
        const result = await axios.get("https://replicarepo-production.up.railway.app/replica/v1/employees",{
            params: {
              page: page, // Página actual
              size: 5 // Tamaño de página (10 items por página en este ejemplo)
            }
          });
        setEmployees(result.data.data.content);
        setTotalPages(result.data.data.page.totalPages);
    };

    const deleteEmployee = async (id,username) => {
        await axios.delete(`https://replicarepo-production.up.railway.app/replica/v1/employees/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        await axios.delete(`https://replicarepo-production.up.railway.app/replica/v1/users/username/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        loadEmployees()
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="py-4">
                    <h3 className='mb-3'><b>Lista de Empleados</b></h3>

                    <table class="table shadow">
                        <thead>
                            <tr class="table-primary">
                                <th scope="col">Nº Empleado</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Email</th>
                                <th scope="col">Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map((employee, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{employee.id}</th>
                                        <td>{employee.name}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.login_user.email}</td>
                                        <td>
                                            <Link className="btn btn-primary mx-2" to={`/view_employee_admin/${employee.id}`}>Detalles</Link>
                                            <Link className="btn btn-outline-primary mx-2" to={`/edit_employee_admin/${employee.id}`}>Editar</Link>
                                            <button className="btn btn-danger mx-2" onClick={() => deleteEmployee(employee.id,employee.username)}>Eliminar</button>
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
                    <Link class="btn btn-outline-success mx-2" to="/add_employee">Añadir Empleado</Link>
                </div>

            </div>
            <Footer />
        </div>
    )
}
