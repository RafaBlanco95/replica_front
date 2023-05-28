import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';


export default function ViewTeacherAdmin() {

    const [teacher, setTeacher] = useState({
        id: 0,
        username: '',
        name:'',
        lastName:'',
        center:'',
        login_user:{
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
        students: [
          {
            id: 0,
            name: '',
            username: '',
            lastName: '',
            finalProject: {
              id: 0,
              title: '',
              expositionDate: ''
            }
          }
        ],
          
        
      });

    const { id } = useParams();

    useEffect(() => {
        loadTeacher()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadTeacher = async () => {
        const result = await axios.get(`http://localhost:8080/replica/v1/teachers/${id}`)
        setTeacher(result.data.data)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='row mb-5'>
                    <div className='col-md-8 offset-md-2 border rounded p-4 mt-3 shadow'>
                        <h2 className='text-center m-4'>Ficha del Profesor</h2>
                        <div className='card'>
                            <div className='card-header'>
                                <b>Ficha del Profesor Nº:</b>
                                {teacher.id}
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>
                                        <b>Nombre: </b>
                                        {teacher.name}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Apellidos: </b>
                                        {teacher.lastName}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Centro: </b>
                                        {teacher.center}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Alumnos: </b>
                                    </li>
                                    <li className='list-group-item'>

                                        <table class="table shadow">
                                            <thead>
                                                <tr class="table-primary">
                                                    <th scope="col">Código</th>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">Apellido</th>
                                                    <th scope="col">TFG</th>
                                                    <th scope="col">Seguimiento</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    teacher.students.map((student, index) => (
                                                        <tr>
                                                            <th scope="row" key={index}>{student.id}</th>
                                                            <td>{student.name}</td>
                                                            <td>{student.lastName}</td>
                                                            <td>{student.finalProject.title}</td>
                                                            <td><Link className='btn btn-outline-primary mx-2' to={`/view_student_admin/${student.id}`}>Detalle Alumno</Link></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>

                                        </table>
                                    </li>

                                   


                                </ul>
                            </div>


                        </div>
                        <Link className="btn btn-primary my-2" to={"/teachers_list"}>Volver</Link>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )

}