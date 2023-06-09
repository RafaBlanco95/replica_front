import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Footer from '../layout/FooterStudent';
import Navbar from '../layout/NavbarStudent';


export default function ViewInternshipDetail() {

  const [page, setPage] = useState(0); // Página actual
  const [totalPages, setTotalPages] = useState(0); // Total de páginas

  const [internship, setInternship] = useState({

    id: 0,
    startingDate: '',
    endingDate: '',
    type: '',
    totalHours: 0,
    enterprise: '',
    workdays: [
      {
        id: 2,
        date: '',
        hours: 0,
        description: '',
        isValidated: false
      }]

  });

  const [workday, setWorkday] = useState([{
    id: 0,
    date: '',
    hours: 0,
    description: '',
    isValidated: false
  }

  ]);

  const { id } = useParams();

  useEffect(() => {
    loadInternship()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  

  const loadInternship = async () => {
    const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/internships/${id}`);
    setInternship(result.data.data);
    const result2 = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/internships/${id}/workdays`, {
      params: {
        page: page, // Página actual
        size: 5 // Tamaño de página (10 items por página en este ejemplo)
      }
    });
    console.log(result2);
    setWorkday(result2.data.data.content);
    console.log(workday);
    setTotalPages(result2.data.data.page.totalPages);
  };

  let navigate = useNavigate()
    const goBack= async()=>{
        navigate(`/internships`)
    }

    const addWorkday= async()=>{
      navigate(`/internships/${id}/add_workday`)
  }

  

  
  const totalHours = workday.reduce((sum, workday) => sum + workday.hours, 0);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className='row mb-5'>
          <div className='col-md-8 offset-md-2 border rounded p-4 mt-5 shadow'>
            <h2 className='text-center m-4'>Detalle de Práctica</h2>
            <div className='card'>
              <div className='card-header'>
                <b>Práctica con Código Nº:</b>
                {internship.id}
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <b>Fecha de Inicio: </b>
                    {internship.startingDate}
                  </li>
                  <li className='list-group-item'>
                    <b>Fecha Fin: </b>
                    {internship.endingDate}
                  </li>
                  <li className='list-group-item'>
                    <b>Empresa: </b>
                    {internship.enterprise}
                  </li>
                  <li className='list-group-item'>
                    <b>Modelo: </b>
                    {internship.type}
                  </li>
                  <li className='list-group-item'>
                    <b>Horas A Cumplir: </b>
                    {internship.totalHours}
                  </li>
                  <li className='list-group-item'>
                    <b>Horas Trabajadas: </b>
                   {totalHours}
                  </li>

                  <li className='list-group-item'>
                    <b>Jornadas de Trabajo: </b>
                  </li>
                  <li className='list-group-item'>

                    <table class="table shadow">
                      <thead>
                        <tr class="table-primary">
                          <th scope="col">Código</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Horas</th>
                          <th scope="col">Validación</th>
                          <th scope="col">Acciones</th>

                        </tr>
                      </thead>
                      <tbody>
                        {
                          workday.map((workday, index) => (
                            <tr key={index}>
                              <th scope="row">{workday.id}</th>
                              <td>{workday.date}</td>
                              <td>{workday.hours}</td>
                              <td>
                                {workday.isValidated ? (
                                  <i className="fa-solid fa-circle-check" style={{ color: "#19d247" }}></i>
                                ) : (
                                  <div>
                                      <i className="fa-solid fa-circle-xmark" style={{ color: "#d30d0d" }}></i>
                                  </div>
                                  
                                  
                                )}
                              </td>
                              <td>
                                <Link className='btn btn-outline-primary mx-2' to={`/internships/${id}/workday/${workday.id}`}>Ver Más</Link>
                                
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <button className="btn btn-primary my-2" disabled={page === 0} onClick={() => setPage(page - 1)}>
                Anterior
              </button>
              <button className="btn btn-primary my-2" disabled={page === totalPages - 1} onClick={() => setPage(page + 1)}>
                Siguiente
              </button>
            </div>
            <button className="btn btn-outline-success" onClick={() => addWorkday()}>Registrar Día de Trabajo</button>
            <button className="btn btn-primary mx-2" onClick={() => goBack()}>Volver</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

}