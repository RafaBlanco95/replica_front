import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../layout/FooterAdmin';
import Navbar from '../../layout/NavbarAdmin';

export default function EditAdmin() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    id: 0,
    username: '',
    email: '',
    password: '',
  });

 

  const { username,  email } = user;
 

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/users/${id}`);
      setUser(result.data.data);
    };
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://replicarepo-production.up.railway.app/replica/v1/users/${user.id}`, user);
    localStorage.removeItem('username');
    localStorage.setItem('username', username);
    navigate(`/admin_profile`);
  };



    return (
        <div>
        <Navbar/>
        <div className="container">
            <div className='row mb-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Modificar Datos del Administrador</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>
                                Nombre de Usuario
                            </label>
                            <input type={"text"} className="form-control" placeholder='Nuevo Nombre de Usuario' name="username" value={username} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>
                                Contraseña
                            </label>
                            <input type={"password"} className="form-control" placeholder='Nueva Contraseña' name="password"  onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>
                                Correo Electrónico
                            </label>
                            <input type={"text"} className="form-control" placeholder='nombre.apellidos@nervion.salesianas.org' name="email" value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>Registrar Cambios</button>
                        <Link className='btn btn-outline-danger mx-2' to={"/admin_profile"}>Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
