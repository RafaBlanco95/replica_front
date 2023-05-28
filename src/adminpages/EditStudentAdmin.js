import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../layout/NavbarAdmin';
import Footer from '../layout/FooterAdmin';


export default function EditStudentAdmin() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    id: 0,
    username: '',
    email: '',
    password: ''
  });

  const [student, setStudent] = useState({
    id: 0,
    username: '',
    name:'',
    lastName:'',
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

  const { password, email } = user;
  const { username, name, lastName } = student;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/replica/v1/students/${id}`);
      setUser(result.data.data.login_user);
      setStudent(result.data.data);
    };
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/replica/v1/students/${id}`, student);
    await axios.put(`http://localhost:8080/replica/v1/users/${user.id}`, user);
    localStorage.removeItem('username');
    localStorage.setItem('username', username);
    navigate(`/view_student/${id}`);
  };



    return (
        <div>
        <Navbar/>
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Modificar Datos del Alumno</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>
                                Nombre de Usuario
                            </label>
                            <input type={"text"} className="form-control" placeholder='Nuevo Nombre de Usuario' name="username" value={username} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>
                                Nombre
                            </label>
                            <input type={"text"} className="form-control" placeholder='Nuevo Nombre' name="name" value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='lastName' className='form-label'>
                                Apellidos
                            </label>
                            <input type={"text"} className="form-control" placeholder='Nuevos Apellidos' name="lastName" value={lastName} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>
                                Contraseña
                            </label>
                            <input type={"text"} className="form-control" placeholder='Nueva Contraseña' name="password" value={password} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>
                                Correo Electrónico
                            </label>
                            <input type={"text"} className="form-control" placeholder='nombre.apellidos@nervion.salesianas.org' name="email" value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>Registrar Cambios</button>
                        <Link className='btn btn-outline-danger mx-2' to={"/students_list"}>Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
