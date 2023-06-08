import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../layout/FooterStudent';
import Navbar from '../layout/NavbarStudent';


export default function FinalProject() {

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

 

  useEffect(() => {
    loadFinalProject()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const loadFinalProject = async () => {
    const username = localStorage.getItem('username');
    const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/students/username/${username}`);
    setFinalProject(result.data.data.finalProject);
    const result2 = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/final_projects/${result.data.data.finalProject.id}/meetings`, {
      params: {
        page: page, // Página actual
        size: 5 // Tamaño de página (10 items por página en este ejemplo)
      }
    });
    
    setMeeting(result2.data.data.content);
    
    setTotalPages(result2.data.data.page.totalPages);
    
  };

  let navigate = useNavigate()
    
    const addMeeting= async()=>{
        navigate(`/final_project/${finalProject.id}/add_meeting`)
    }

    const deleteMeeting = async (idMeeting) => {
      const result4=await axios.delete(`https://replicarepo-production.up.railway.app/replica/v1/meetings/${idMeeting}`);
      console.log(result4);
      loadFinalProject()
  };
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
                                <Link className='btn btn-outline-primary mx-2' to={`/final_project/${finalProject.id}/meeting/${meeting.id}`}>Ver Más</Link>
                                <button className="btn btn-danger mx-2" onClick={() => deleteMeeting(meeting.id)}>Eliminar</button>
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
            <button className="btn btn-outline-success" onClick={() => addMeeting()}>Agendar Nueva Reunión</button>
            
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  )

}