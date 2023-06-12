import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
import Navbar from '../layout/NavbarStudent';
import Footer from '../layout/FooterStudent';
export default function AddWorkdayToInternshipStudent() {

    let navigate = useNavigate()

    const { id } = useParams();
    const [workday, setWorkday] = useState({
        id: 0,
        date: '',
        hours: 0,
        description: '',
        isValidated: false
    });

    const { date, hours, description} = workday

    const onInputChange = (e) => {
        setWorkday({ ...workday, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`https://replicarepo-production.up.railway.app/replica/v1/workdays/internships/${id}`, workday)
        navigate(`/internships/${id}`)
    }

    const goBack= async()=>{
        navigate(`/internships/${id}`)
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='row mb-5'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-5 shadow'>
                        <h2 className='text-center m-4'>Registrar Día de Trabajo</h2>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='mb-3'>
                                <label htmlFor='username' className='form-label'>
                                    Fecha
                                </label>
                                <input type={"date"} className="form-control" name="date" value={date} onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                            <label htmlFor='hours' className='form-label'>
                                Horas
                            </label>
                            <input type={"number"} className="form-control" placeholder='Nombre' name="hours" value={hours} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='description' className='form-label'>
                                Descripción
                            </label>
                            <input type={"text"} className="form-control" placeholder='Description' name="description" value={description} onChange={(e) => onInputChange(e)} />
                        </div>
                        
                            <button type="submit" className='btn btn-outline-primary'>Registrar</button>
                            <button className="btn btn-danger mx-2" onClick={() => goBack()}>Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
