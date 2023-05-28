import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';

export default function EmployeeList() {

    const [employees, setEmployees] = useState([]);



    useEffect(() => {
        loadEmployees();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const token = localStorage.getItem('token');
    const loadEmployees = async () => {
        const result = await axios.get("http://localhost:8080/replica/v1/employees", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setEmployees(result.data.data.content);
    };

    const deleteEmployee = async (id,username) => {
        await axios.delete(`http://localhost:8080/replica/v1/employees/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        await axios.delete(`http://localhost:8080/replica/v1/users/username/${username}`, {
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
                    <Link class="btn btn-outline-success" to="/add_employee">Añadir Empleado</Link>
                </div>

            </div>
            <Footer />
        </div>
    )
}
