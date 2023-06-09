import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../layout/NavbarTeacher';
import Footer from '../layout/FooterTeacher';
export default function TeacherAddMeetingToFinalProject() {

    let navigate = useNavigate()

    const { id,id2 } = useParams();
    const [meeting, setMeeting] = useState({
       
    date: '',
    hour: '',
    duration: 0,
    progress: ''
    });

    const { date, hour, duration, progress} = meeting

    const onInputChange = (e) => {
        setMeeting({ ...meeting, [e.target.name]: e.target.value })
    }

    const goBack= async()=>{
        navigate(`/teacher/student/${id}/final_project/${id2}`)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`https://replicarepo-production.up.railway.app/replica/v1/meetings/final_projects/${id2}`, meeting)
        navigate(`/teacher/student/${id}/final_project/${id2}`)
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='row mb-5'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                        <h2 className='text-center m-4'>Agendar Nueva Reunión</h2>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='mb-3'>
                                <label htmlFor='username' className='form-label'>
                                    Fecha
                                </label>
                                <input type={"date"} className="form-control" name="date" value={date} onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                            <label htmlFor='hour' className='form-label'>
                                Hora
                            </label>
                            <input type={"text"} className="form-control" placeholder='00:00:00' name="hour" value={hour} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='duration' className='form-label'>
                                Duración en minutos
                            </label>
                            <input type={"number"} className="form-control" placeholder='15' name="duration" value={duration} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='progress' className='form-label'>
                                Descripción
                            </label>
                            <input type={"text"} className="form-control" placeholder='Descripción' name="progress" value={progress} onChange={(e) => onInputChange(e)} />
                        </div>
                        
                            <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                            <button className="btn btn-primary my-2" onClick={() => goBack()}>Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
