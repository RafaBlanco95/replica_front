import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom';
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';

export default function AddTeacherToStudent() {

    
    let navigate = useNavigate()
    const { centerName, createdUser } = useParams();

    useEffect(() => {
        loadTeachers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [filteredTeachers, setFilteredTeachers] = useState([]);
    const token = localStorage.getItem('token');
    const loadTeachers = async () => {
        const result = await axios.get("https://replicarepo-production.up.railway.app/replica/v1/teachers", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        
        const allTeachers = result.data.data.content;
  const filteredTeachers = allTeachers.filter((teacher) => teacher.center === decodeURIComponent(centerName));

  setFilteredTeachers(filteredTeachers);
        
    };

    const associateTeacher = async (id) => {
        
        await axios.patch(`https://replicarepo-production.up.railway.app/replica/v1/students/${createdUser}/teachers/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        navigate(`/complete_student/internship/${createdUser}`)
        loadTeachers()
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="py-4">
                    <h3 className='mb-5'><b>Seleccione el profesor a cargo del nuevo alumno</b></h3>

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
                        {filteredTeachers.map((teacher, index) => (
    <tr key={index}>
      <th scope="row">{teacher.id}</th>
      <td>{teacher.name}</td>
      <td>{teacher.lastName}</td>
      <td>{teacher.login_user.email}</td>
      <td>{teacher.center}</td>
      <td>
        <button className="btn btn-danger mx-2" onClick={() => associateTeacher(teacher.id)}>Seleccionar</button>
      </td>
    </tr>
  ))}
</tbody>
                    </table>
                    
                </div>

            </div>
            <Footer />
        </div>
    )
}
