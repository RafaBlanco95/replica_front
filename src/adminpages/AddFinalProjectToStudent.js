import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../layout/NavbarAdmin';
import Footer from '../layout/FooterAdmin';


export default function AddFinalProjectToStudent() {
  let navigate = useNavigate();
  const { createdUser } = useParams();
    
  const [finalProject, setFinalProject] = useState({
    id: 0,
    title: '',
    expositionDate: ''
  });

  const [student, setStudent] = useState({
    id: 0,
    username: '',
    name:'',
    lastName:'',
    login_user:{
        id: 0,
      username: '',
      email: '',
      password: '',
      roles: [
        {
          id: 0,
          name: ''
        }
      ]
    },
    teacher: {
        id: 0,
        username: '',
        name: '',
        lastName: '',
        center: ''
      },
      internships: [
        {
          id: 0,
          startingDate: '',
          endingDate: '',
          type: '',
          totalHours: 0,
          enterprise: ''
        }
      ],
      finalProject: {
        id: 0,
        title: '',
        expositionDate: ''
      }
    
  });

  const{title, expositionDate}=finalProject
  const { id } = student;

  const onInputChange = (e) => {
    setFinalProject({ ...finalProject, [e.target.name]: e.target.value });
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/replica/v1/students/username/${createdUser}`);
      setStudent(result.data.data);
      
    };
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(finalProject);
    await axios.patch(`http://localhost:8080/replica/v1/students/final_projects/${id}`, finalProject);
    navigate(`/students_list`);
  };



    return (
        <div>
        <Navbar/>
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Crear TFG al Nuevo Alumno</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                       
                    
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>
                                Título
                            </label>
                            <input type={"text"} className="form-control" name="title" value={title} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='expositionDate' className='form-label'>
                                Fecha de entrega
                            </label>
                            <input type={"date"} className="form-control" name="expositionDate" value={expositionDate} onChange={(e) => onInputChange(e)} />
                        </div>
                        
                       
                        
                        <button type="submit" className='btn btn-outline-primary'>Registrar Cambios</button>
                        <Link className='btn btn-outline-danger mx-2' to={`/complete_student/employee/${createdUser}`}>Volver</Link>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
