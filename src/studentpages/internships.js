import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import FooterStudent from '../layout/FooterStudent'
import NavbarStudent from '../layout/NavbarStudent'
export default function Internships() {

    const [internships, setInternships] = useState([]);



    useEffect(() => {
        loadInternships();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const username = localStorage.getItem('username');
    const loadInternships = async () => {
        const result = await axios.get(`http://localhost:8080/replica/v1/internships/username/${username}`);
        console.log(result);
        setInternships(result.data.data);
    };

    

    return (
        <div>
            <NavbarStudent />
            <div className="container">
                <div className="py-4">
                    <h3 className='mb-3'><b>Lista de Prácticas</b></h3>

                    <table class="table shadow">
                        <thead>
                            <tr class="table-primary">
                                <th scope="col">Código de Práctica</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Empresa</th>
                                <th scope="col">Fecha inicio</th>
                                <th scope="col">Fecha fin</th>
                                <th scope="col">Horas Totales</th>
                                <th scope="col">Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                internships.map((internship, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{internship.id}</th>
                                        <td>{internship.type}</td>
                                        <td>{internship.enterprise}</td>
                                        <td>{internship.startingDate}</td>
                                        <td>{internship.endingDate}</td>
                                        <td>{internship.totalHours}</td>
                                        <td>
                                            <Link className="btn btn-primary mx-2" to={`/internships/${internship.id}`}>Detalles</Link>
                                            
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    
                </div>

            </div>
            <FooterStudent />
        </div>
    )
}
