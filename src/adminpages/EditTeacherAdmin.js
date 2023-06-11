import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../layout/NavbarAdmin';
import Footer from '../layout/FooterAdmin';


export default function EditTeacherAdmin() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    id: 0,
    username: '',
    email: '',
    password: ''
  });

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
    ],
      
    
  });
  const [isPasswordValid, setPasswordValid] = useState(false);
  const { email } = user;
  const { username, name, lastName } = teacher;

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'password') {
      setPasswordValid(value.trim() !== '');
    }
    setUser({ ...user, [e.target.name]: e.target.value });
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/teachers/${id}`);
      setUser(result.data.data.login_user);
      setTeacher(result.data.data);
    };
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(teacher);
    await axios.put(`https://replicarepo-production.up.railway.app/replica/v1/teachers/${id}`, teacher);
    await axios.put(`https://replicarepo-production.up.railway.app/replica/v1/users/${user.id}`, user);
   
    navigate(`/view_teacher_admin/${id}`);
  };



    return (
        <div>
        <Navbar/>
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded mb-5 p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Modificar Datos del Profesor</h2>
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
                            <input type={"password"} className="form-control" placeholder='Nueva Contraseña' name="password" onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>
                                Correo Electrónico
                            </label>
                            <input type={"text"} className="form-control" placeholder='nombre.apellidos@nervion.salesianas.org' name="email" value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type='submit' className='btn btn-outline-primary' disabled={!isPasswordValid}>
                Registrar Cambios
              </button>
                        <Link className='btn btn-outline-danger mx-2' to={"/teachers_list"}>Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
