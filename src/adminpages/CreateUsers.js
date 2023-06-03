
import React from 'react'
import Footer from '../layout/FooterAdmin';
import Navbar from '../layout/NavbarAdmin';
import { Link} from 'react-router-dom';

export default function CreateUsers() {

   
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='row mb-5'>
                    <div className='col-md-8 offset-md-2 border rounded p-4 mt-3 shadow'>
                        <h2 className='text-center m-4'>Alumnos</h2>
                        <div className='card'>
                        <Link className='btn btn-outline-warning ' to="/add_student">Dar de Alta Nuevo Alumno</Link>
                        </div>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-md-8 offset-md-2 border rounded p-4 mt-3 shadow'>
                        <h2 className='text-center m-4'>Profesores</h2>
                        <div className='card'>
                        <Link className='btn btn-outline-info ' to="/add_teacher">Dar de Alta Nuevo Profesor</Link>
                        </div>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-md-8 offset-md-2 border rounded p-4 mt-3 shadow'>
                        <h2 className='text-center m-4'>Tutores</h2>
                        <div className='card'>
                            
                            <Link className='btn btn-outline-danger' to="/add_employee">Dar de Alta Nuevo Tutor Laboral</Link>
                               
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}