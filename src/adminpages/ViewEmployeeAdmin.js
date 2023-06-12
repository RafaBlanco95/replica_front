import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';


export default function ViewEmployeeAdmin() {

    const [employee, setEmployee] = useState({
        id: 0,
        username: '',
        name: '',
        lastName: '',
        center:'',
        login_user: {
            id: 0,
            username: '',
            email: '',
            password: '',
            roles: [
                {
                    id: 0,
                    name: ''
                }
            ]
        },
        internships: [
            {
                id: 0,
                startingDate: '',
                endingDate: '',
                type: '',
                totalHours: 0,
                enterprise: '',
                student: {
                    id: 0,
                    name: '',
                    username: '',
                    lastName: '',
                    login_user: {
                        id: 0,
                        username: '',
                        email: '',
                        password: '',
                        roles: [
                            {
                                id: 0,
                                name: ''
                            }
                        ]
                    }, teacher: {
                        id: 0,
                        username: '',
                        name: '',
                        lastName: '',
                        center: ''
                    },
                    internships: [
                        {
                            id: 0,
                            startingDate: '',
                            endingDate: '',
                            type: '',
                            totalHours: 0,
                            enterprise: ''
                        }
                    ],
                    finalProject: {
                        id: 0,
                        title: '',
                        expositionDate: ''
                    }
                }
            }
        ]
    });

    const { id } = useParams();

    useEffect(() => {
        loadEmployee()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadEmployee = async () => {
        const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/employees/${id}`)
       
        setEmployee(result.data.data)
        console.log(employee)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='row mb-5'>
                    <div className='col-md-8 offset-md-2 border rounded p-4 mt-5 shadow'>
                        <h2 className='text-center m-4'>Ficha del Tutor</h2>
                        <div className='card'>
                            <div className='card-header'>
                                <b>Ficha del Tutor Nº:</b>
                                {employee.id}
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>
                                        <b>Nombre: </b>
                                        {employee.name}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Apellidos: </b>
                                        {employee.lastName}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Empresa: </b>
                                        {employee?.center}
                                    </li>
                                    
                                    <li className='list-group-item'>
                                        <b>Prácticas: </b>
                                    </li>
                                    <li className='list-group-item'>

                                        <table class="table shadow">
                                            <thead>
                                                <tr class="table-primary">
                                                    <th scope="col">Código</th>
                                                    <th scope="col">Empresa</th>
                                                    <th scope="col">Alumno</th>
                                                    <th scope="col">Seguimiento</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    employee?.internships?.map((internship, index) => (
                                                        <tr>
                                                            <th scope="row" key={index}>{internship.id}</th>
                                                            <td>{internship?.enterprise}</td>
                                                            <td>{internship?.student?.username}</td>                                                           
                                                            <td><Link className='btn btn-outline-primary mx-2' to={`/student/${internship?.student?.id}}/internship/${internship.id}`}>Detalle Práctica</Link></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>

                                        </table>
                                    </li>

                                   


                                </ul>
                            </div>


                        </div>
                        <Link className="btn btn-primary my-2" to={"/employees_list"}>Volver</Link>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )

}