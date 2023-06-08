import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../layout/FooterStudent';
import Navbar from '../layout/NavbarStudent';


export default function InternshipWorkdayDetailStudent() {
   
    const [workday, setWorkday] = useState({
        id: 0,
        date: '',
        hours: 0,
        description: '',
        isValidated: false

    });

    const { id,id2 } = useParams();

    useEffect(() => {
        loadWorkday()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadWorkday = async () => {
        const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/workdays/${id2}`)

        setWorkday(result.data.data)
    }
    let navigate = useNavigate()
    const goBack= async()=>{
        navigate(`/internships/${id}`)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='row mb-5'>
                    <div className='col-md-8 offset-md-2 border rounded p-4 mt-3 shadow'>
                        <h2 className='text-center m-4'>Jornada día {workday.date}</h2>
                        <div className='card'>
                            <div className='card-header'>
                                <b>Ficha diaria con código Nº:</b>
                                {workday ? workday.id : 'Cargando...'}
                                {/* Comprobación de nulidad antes de acceder a las propiedades */}
                                {workday && (
                                    <ul className='list-group list-group-flush'>
                                       
                                        <li className='list-group-item'>
                                            <b>Horas trabajadas: </b>
                                            {workday.hours}
                                        </li>
                                        
                                        <li className='list-group-item'>
                                            <b>Validación: </b>
                                            {workday.isValidated ? (
                                                <i className="fa-solid fa-circle-check" style={{ color: "#19d247" }}></i>
                                            ) : (
                                                <i className="fa-solid fa-circle-xmark" style={{ color: "#d30d0d" }}></i>
                                            )}
                                        </li>
                                        <li className='list-group-item'>
                                            <b>Descripción: </b>
                                            {workday.description}
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