import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../layout/FooterStudent';
import Navbar from '../layout/NavbarStudent';


export default function FinalProjectMeetingDetailStudent() {
   
    const [meeting, setMeeting] = useState({
        id: 0,
    date: '',
    hour: '',
    duration: 0,
    progress: ''

    });

  
    const { id2 } = useParams();

    useEffect(() => {
        loadMeeting()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadMeeting = async () => {
        const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/meetings/${id2}`)

        setMeeting(result.data.data)
        console.log(result);
        
    }
    let navigate = useNavigate()
    const goBack= async()=>{
        navigate(`/final_project`)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='row mb-5'>
                    <div className='col-md-8 offset-md-2 border rounded p-4 mt-5 shadow'>
                        <h2 className='text-center m-4'>Reunión {meeting.date} {meeting.hour} </h2>
                        <div className='card'>
                            <div className='card-header'>
                                <b>Reunión con código Nº:</b>
                                {meeting ? meeting.id : 'Cargando...'}
                                {/* Comprobación de nulidad antes de acceder a las propiedades */}
                                {meeting && (
                                    <ul className='list-group list-group-flush'>
                                       
                                        <li className='list-group-item'>
                                            <b>Tiempo de la reunión: </b>
                                            {meeting.duration}
                                        </li>
                                        
                                        <li className='list-group-item'>
                                            <b>Descripción: </b>
                                            {meeting.progress}
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <button className="btn btn-primary my-2" onClick={() => goBack()}>Volver</button>
                        
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )

}