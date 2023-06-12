import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, useParams, useNavigate } from 'react-router-dom'
import Footer from '../layout/FooterEmployee';
import Navbar from '../layout/NavbarEmployee';


export default function ViewStudentEmployee() {

    let navigate = useNavigate()
    const [student, setStudent] = useState({
        id: 0,
        username: '',
        name: '',
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
        },
        teacher: {
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

    });

    const { id, id2 } = useParams();

    useEffect(() => {
        loadStudent()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const goBack= async()=>{
        navigate(`/employee/internships/${id2}`)
    }
    const loadStudent = async () => {
        const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/students/${id}`)
        setStudent(result.data.data)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='row mb-5'>
                    <div className='col-md-8 offset-md-2 border rounded p-4 mt-5 shadow'>
                        <h2 className='text-center m-4'>Ficha del Alumno</h2>
                        <div className='card'>
                            <div className='card-header'>
                                <b>Ficha del Alumno con Nº de matrícula:</b>
                                {student.id}
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>
                                        <b>Nombre: </b>
                                        {student.name}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Apellidos: </b>
                                        {student.lastName}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Profesor: </b>
                                    </li>
                                    <li className='list-group-item'>

                                        <table class="table shadow">
                                            <thead>
                                                <tr class="table-primary">
                                                    <th scope="col">ID Profesor</th>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">Centro</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{student.teacher ? student.teacher.id : 'N/A'}</td>
                                                    <td>{student.teacher ? student.teacher.name : 'N/A'}</td>
                                                    <td>{student.teacher ? student.teacher.center : 'N/A'}</td>
                                                    

                                                </tr>
                                            </tbody>

                                        </table>
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Prácticas Realizadas: </b>
                                    </li>
                                    <li className='list-group-item'>

                                        <table class="table shadow">
                                            <thead>
                                                <tr class="table-primary">
                                                    <th scope="col">Código</th>
                                                    <th scope="col">Tipo</th>
                                                    <th scope="col">Empresa</th>
                                                    <th scope="col">Horas Totales</th>
                                                    <th scope="col">Seguimiento</th>
                                                   

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    student?.internships?.map((internships, index) => (
                                                        <tr>
                                                            <th scope="row" key={index}>{internships.id}</th>
                                                            <td>{internships?.type}</td>
                                                            <td>{internships?.enterprise}</td>
                                                            <td>{internships?.totalHours}</td>
                                                            <td><Link className='btn btn-outline-primary mx-2' to={`/employee/internships/${internships.id}`}>Seguimiento</Link></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>

                                        </table>
                                    </li>

                                    <li className='list-group-item'>
                                        <b>Proyecto Final: </b>
                                    </li>
                                    <li className='list-group-item'>

                                        <table class="table shadow">
                                            <thead>
                                                <tr class="table-primary">
                                                    <th scope="col">ID del Proyecto</th>
                                                    <th scope="col">Título</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{student.finalProject ? student.finalProject.id : 'N/A'}</td>
                                                    <td>{student.finalProject ? student.finalProject.title : 'N/A'}</td>
                                                    

                                                </tr>
                                            </tbody>

                                        </table>
                                    </li>


                                </ul>
                            </div>


                        </div>
                        <button className="btn btn-primary my-2" onClick={() => goBack()}>Volver</button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )

}