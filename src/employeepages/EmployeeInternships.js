import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import FooterStudent from '../layout/FooterEmployee'
import NavbarStudent from '../layout/NavbarEmployee'
export default function EmployeeInternships() {

    const [internships, setInternships] = useState([]);

    const [page, setPage] = useState(0); // Página actual
    const [totalPages, setTotalPages] = useState(0); // Total de páginas

    useEffect(() => {
        loadInternships();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const username = localStorage.getItem('username');
    const loadInternships = async () => {
        const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/internships/employees/username/${username}`, {
            params: {
                page: page, // Página actual
                size: 5 // Tamaño de página (10 items por página en este ejemplo)
              }
        });
        console.log(result);
        setInternships(result.data.data.content);
        setTotalPages(result.data.data.page.totalPages);
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
                                            <Link className="btn btn-primary mx-2" to={`/employee/internships/${internship.id}`}>Detalles</Link>
                                            
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-primary my-2" disabled={page === 0} onClick={() => setPage(page - 1)}>
                Anterior
              </button>
              <button className="btn btn-primary my-2" disabled={page === totalPages - 1} onClick={() => setPage(page + 1)}>
                Siguiente
              </button>
                </div>
               
            </div>
            <FooterStudent />
        </div>
    )
}
