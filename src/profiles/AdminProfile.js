import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'


const AdminProfile = () => {
    const [userData, setUserData] = useState(null);
  
    let navigate = useNavigate()

    function handleToken() {
        localStorage.removeItem('token');
        navigate("/home");
        return null;
    }


    useEffect(() => {
      // Lógica para realizar la petición HTTP y obtener los datos del usuario
      const fetchUserData = async () => {
        try {
          const token = localStorage.getItem('token');
          const username= localStorage.getItem('username');
          const response = await axios.get(`http://localhost:8080/replica/v1/admins/${username}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          // Almacena los datos del usuario en el estado
          setUserData(response.data);
        } catch (error) {
          console.log('Error al obtener los datos del usuario', error);
        }
      };
  
      fetchUserData();
    }, []);
    return (
        <div className="container">
            <div className='row mb-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                    <h2 className='text-center m-4'>Perfil de usuario</h2>
                    <div className='card'>
                        <div className='card-header'>
                            <b> Nº de Usuario:</b>
                            {userData.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Nombre de Usuario: </b>
                                    {userData.username}
                                </li>
                                <li className='list-group-item'>
                                    <b>Correo Electrónico </b>
                                    {userData.email}
                                </li>
                                <li className='list-group-item'>
                                    <b>Contraseña: </b>
                                    {userData.password}
                                </li>
                                <li className='list-group-item'>
                                    <b>Rol: </b>
                                    {userData.roles[0]}
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-primary mx-2" to={`/edituser/${userData.id}`}>Editar</Link>
                        <button className="btn btn-danger mx-2" onClick={handleToken}>Cerrar Sesión</button>
                        

                    </div>
                    <Link className="btn btn-primary my-2" to={"/home"}>Volver</Link>
                </div>

            </div>
        </div>
   );
};

export default AdminProfile;