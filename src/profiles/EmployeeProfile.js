import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../layout/NavbarEmployee';
import Footer from '../layout/FooterEmployee';


const EmployeeProfile = () => {
    const [userData, setUserData] = useState(null);

    let navigate = useNavigate()

    function handleToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        navigate("/home");
        return null;
    }



    useEffect(() => {
        // Lógica para realizar la petición HTTP y obtener los datos del usuario
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const username = localStorage.getItem('username');
                const response = await axios.get(`http://localhost:8080/replica/v1/employees/username/${username}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(response);

                // Almacena los datos del usuario en el estado
                setUserData(response.data);

            } catch (error) {
                console.log('Error al obtener los datos del usuario', error);
            }
        };

        fetchUserData();
    }, []);
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className='row mb-5'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                        <h2 className='text-center m-4'>Perfil de Empleado</h2>
                        <div className='card'>
                            <div className='card-header'>
                                <b> Nº de Usuario:</b>
                                {userData?.data?.id}
                                <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                        <b>Nombre de Usuario: </b>
                                        {userData?.data?.username}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Nombre: </b>
                                        {userData?.data?.name}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Apellidos: </b>
                                        {userData?.data?.lastName}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Correo Electrónico </b>
                                        {userData?.data?.login_user?.email}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Contraseña: </b>
                                        {userData?.data?.login_user?.password}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Rol: </b>
                                        {userData?.data?.login_user?.roles[0].name}
                                    </li>
                                </ul>
                            </div>

                           


                        </div>
                        <Link className="btn btn-primary mx-2" to={`/edit_employee/${userData?.data?.id}`}>Editar</Link>
                        <button className="btn btn-danger mx-2" onClick={handleToken}>Cerrar Sesión</button>
                        <Link className="btn btn-secondary my-2" to={"/home"}>Volver</Link>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default EmployeeProfile;