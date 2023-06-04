import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';


export default function StudentFinalProjectDetail() {

  const [page, setPage] = useState(0); // Página actual
  const [totalPages, setTotalPages] = useState(0); // Total de páginas

  const [finalProject, setFinalProject] = useState({

    id: 0,
    expositionDate: '',
   title:'',
    meetings: [
      {
        id: 0,
        date: '',
        hour: '',
        duration: 0,
        progress: ''
      }]

  });

  const [meeting, setMeeting] = useState([{
    id: 0,
    date: '',
    hour:'',
    duration: 0,
    progress: ''
    
  }

  ]);

  const { id, id2 } = useParams();

  useEffect(() => {
    loadFinalProject()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const loadFinalProject = async () => {
    const result = await axios.get(`http://localhost:8080/replica/v1/final_projects/${id2}`);
    setFinalProject(result.data.data);
    const result2 = await axios.get(`http://localhost:8080/replica/v1/final_projects/${id2}/meetings`, {
      params: {
        page: page, // Página actual
        size: 5 // Tamaño de página (10 items por página en este ejemplo)
      }
    });
    
    setMeeting(result2.data.data.content);
    
    setTotalPages(result.data.totalPages);
  };

  let navigate = useNavigate()
    const goBack= async()=>{
        navigate(`/view_student_admin/${id}`)
    }

  
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className='row mb-5'>
          <div className='col-md-8 offset-md-2 border rounded p-4 mt-3 shadow'>
            <h2 className='text-center m-4'>Detalle de TFG</h2>
            <div className='card'>
              <div className='card-header'>
                <b>TFG con Código Nº:</b>
                {finalProject.id}
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <b>Fecha de Entrega: </b>
                    {finalProject.expositionDate}
                  </li>
                  <li className='list-group-item'>
                    <b>Título </b>
                    {finalProject.title}
                  </li>

                  <li className='list-group-item'>
                    <b>Reuniones: </b>
                  </li>
                  <li className='list-group-item'>

                    <table class="table shadow">
                      <thead>
                        <tr class="table-primary">
                          <th scope="col">Código</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Duración</th>
                          <th scope="col">Detalle</th>

                        </tr>
                      </thead>
                      <tbody>
                        {
                          meeting.map((meeting, index) => (
                            <tr key={index}>
                              <th scope="row">{meeting.id}</th>
                              <td>{meeting.date}</td>
                              <td>{meeting.duration}</td>
                              
                              <td>
                                <Link className='btn btn-outline-primary mx-2' to={`/student/${id}/final_project/${id2}/meeting/${meeting.id}`}>Ver Más</Link>
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
            <button className="btn btn-primary my-2" onClick={() => goBack()}>Volver</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

}