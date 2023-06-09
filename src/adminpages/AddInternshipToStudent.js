import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../layout/NavbarAdmin';
import Footer from '../layout/FooterAdmin';

export default function AddInternshipToStudent() {
  let navigate = useNavigate();
  const { createdUser } = useParams();

  const [internship, setInternship] = useState({
    startingDate: '',
    endingDate: '',
    type: '',
    totalHours: 0,
    enterprise: '',
  });

  const [student, setStudent] = useState({
    id: 0,
    username: '',
    name: '',
    lastName: '',
    login_user: {
      id: 0,
      username: '',
      email: '',
      password: '',
      roles: [
        {
          id: 0,
          name: '',
        },
      ],
    },
    teacher: {
      id: 0,
      username: '',
      name: '',
      lastName: '',
      center: '',
    },
    internships: [
      {
        id: 0,
        startingDate: '',
        endingDate: '',
        type: '',
        totalHours: 0,
        enterprise: '',
      },
    ],
    finalProject: {
      id: 0,
      title: '',
      expositionDate: '',
    },
  });

  const { startingDate, endingDate, totalHours, enterprise, type } = internship;
  const { id } = student;

  const onInputChange = (e) => {
    if (e.target.name === 'type') {
      setInternship({ ...internship, type: e.target.value });
    } else if (e.target.name === 'enterprise') {
      setInternship({ ...internship, enterprise: e.target.value });
    } else {
      setInternship({ ...internship, [e.target.name]: e.target.value });
    }
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`https://replicarepo-production.up.railway.app/replica/v1/students/username/${createdUser}`);
      setStudent(result.data.data);
    };
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(internship);
    await axios.patch(`https://replicarepo-production.up.railway.app/replica/v1/students/internships/${id}`, internship);
    navigate(`/complete_student/employee/${internship.enterprise}/${createdUser}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded mb-5 p-4 mt-5 shadow'>
            <h2 className='text-center m-4'>Crear Práctica al Nuevo Alumno</h2>
            <form onSubmit={onSubmit}>
              <div className='mb-3'>
                <label htmlFor='startingDate' className='form-label'>
                  Fecha de inicio
                </label>
                <input type='date' className='form-control' name='startingDate' value={startingDate} onChange={onInputChange} />
              </div>
              <div className='mb-3'>
                <label htmlFor='endingDate' className='form-label'>
                  Fecha de fin
                </label>
                <input type='date' className='form-control' name='endingDate' value={endingDate} onChange={onInputChange} />
              </div>
              <div className='mb-3'>

                <label htmlFor='type' className='form-label'>
                  Tipo de Práctica
                </label>
                <select className='form-select' name='type' value={type} onChange={onInputChange}>
                  <option value=''>Seleccionar Tipo</option>
                  <option value='DUAL'>DUAL</option>
                  <option value='FCT'>FCT</option>
                </select>
              </div>
              <div className='mb-3'>
                <label htmlFor='totalHours' className='form-label'>
                  Horas totales
                </label>
                <input type={"number"} className="form-control" name="totalHours" value={totalHours} onChange={(e) => onInputChange(e)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='enterprise' className='form-label'>
                  Empresa
                </label>
                <select className='form-select' name='enterprise' value={enterprise} onChange={onInputChange}>
                  <option value=''>Seleccionar Tipo</option>
                  <option value='NTTDATA'>NTTDATA</option>
                  <option value='ACCENTURE'>ACCENTURE</option>
                  <option value='DELOITTE'>DELOITTE</option>
                </select>
              </div>


              <button type="submit" className='btn btn-outline-primary'>Asignar Práctica</button>
              <Link className='btn btn-outline-danger mx-2' to={"/students_list"}>Cancelar</Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
