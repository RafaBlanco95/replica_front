import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom';
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';

export default function AddEmployeeToStudent() {

    const [employees, setEmployees] = useState([]);
    let navigate = useNavigate()
    const { createdUser } = useParams();

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

    const associateEmployee = async (id) => {
        
        await axios.patch(`http://localhost:8080/replica/v1/students/${createdUser}/employees/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        navigate(`/complete_student/final_project/${createdUser}`)
        loadEmployees()
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="py-4">
                    <h3 className='mb-3'><b>Seleccione el Empleado a cargo de las prácticas del Alumno</b></h3>

                    <table class="table shadow">
                        <thead>
                            <tr class="table-primary">
                                <th scope="col">Nº Empleado</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Email</th>
                                <th scope="col">Empresa</th>
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
                                        <td>{employee.center}</td>
                                        <td>
                                            
                                            <button className="btn btn-danger mx-2" onClick={() => associateEmployee(employee.id)}>Seleccionar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    
                </div>

            </div>
            <Footer />
        </div>
    )
}
