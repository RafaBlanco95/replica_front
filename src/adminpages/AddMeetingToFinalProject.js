import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../layout/NavbarAdmin';
import Footer from '../layout/FooterAdmin';
export default function AddMeetingToFinalProject() {

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
        setUser({ ...meeting, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8080/replica/v1/meetings`, meeting)
        navigate(`/student/${id}/final_project/${id2}`)
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
                            <input type={"text"} className="form-control" placeholder='Nombre' name="hour" value={hour} onChange={(e) => onInputChange(e)} />
                        </div>
                        
                            <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                            <Link className='btn btn-outline-danger mx-2' to="/teachers_list">Cancelar</Link>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
