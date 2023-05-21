import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/replica/v1/signin', { username, password });
      const { token, roles } = response.data;
      const role = roles[0]; // Obtener el primer elemento del array de roles
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      setLoggedIn(true);
    } catch (error) {
      setError('Error de inicio de sesión. Por favor, verifica tus credenciales.');
      console.log(error);
    }
  };

  if (loggedIn) {
    navigate('/home');
    return null; // No es necesario devolver nada después de llamar a navigate
  }

  return (
    <div className="container">
            <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                
                    <h2 className='text-center m-4'>Réplica: Inicio de Sesión</h2>
                    {error && <p>{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div className='mb-3'>
                            <label className='form-label'>
                                Nombre de Usuario
                            </label>
                            <input type={"text"} className="form-control" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label  className='form-label'>
                                Contraseña
                            </label>
                            <input type={"password"} className="form-control"  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>Iniciar Sesión</button>
                       
                    </form>
    </div>
    </div>
    </div>
  );
};

export default Login;
