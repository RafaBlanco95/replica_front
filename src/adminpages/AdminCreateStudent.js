import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../layout/NavbarAdmin';
import Footer from '../layout/FooterAdmin';
export default function AddStudent() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        lastName:"",
        username: "",
        email: "",
        role: [
          "student"
        ],
        password: "",
        center:''
    });
    
    const { name, lastName, username, email, password,center } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`https://replicarepo-production.up.railway.app/replica/v1/signup`, user)
        navigate(`/complete_student/teacher/${user.center}/${username}`)
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='row mb-5'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                        <h2 className='text-center m-4'>Matricular Nuevo Alumno</h2>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='mb-3'>
                                <label htmlFor='username' className='form-label'>
                                    Nombre de Usuario
                                </label>
                                <input type={"text"} className="form-control" placeholder='Nombre de Usuario' name="username" value={username} onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>
                                Nombre
                            </label>
                            <input type={"text"} className="form-control" placeholder='Nombre' name="name" value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='lastName' className='form-label'>
                                Apellidos
                            </label>
                            <input type={"text"} className="form-control" placeholder='Apellidos' name="lastName" value={lastName} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='center' className='form-label'>
                                Center
                            </label>
                            <select className='form-select' name='center' value={center} onChange={onInputChange}>
                  <option value=''>Seleccionar Instituto</option>
                  <option value='IES Alixar'>IES Alixar</option>
                  <option value='IES Campanillas'>IES Campanillas</option>
                  <option value='Salesianas Nervión'>Salesianas Nervión</option>
                  <option value='Santa Joaquina de Vedruna'>Santa Joaquina de Vedruna</option>
                  
                </select></div>
                            <div className='mb-3'>
                                <label htmlFor='grupo' className='form-label'>
                                    Correo Electrónico
                                </label>
                                <input type={"email"} className="form-control" placeholder='Email del Alumno' name="email" value={email} onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password' className='form-label'>
                                    Contraseña
                                </label>
                                <input type={"password"} className="form-control" placeholder='Contraseña del Alumno' name="password" value={password} onChange={(e) => onInputChange(e)} />
                            </div>
                            <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                            <Link className='btn btn-outline-danger mx-2' to="/students_list">Cancelar</Link>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
