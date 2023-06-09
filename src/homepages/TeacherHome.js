import React from 'react'
import FooterTeacher from '../layout/FooterTeacher'
import NavbarTeacher from '../layout/NavbarTeacher'



export default function TeacherHome() {

  return (
    <div>

    <NavbarTeacher/>
    
    <div class="container">
        <div class="container mt-5 mb-5">
          <h2>¡Bienvenido, Profesor! <i class="fa-solid fa-graduation-cap"></i></h2>
        </div>
        <figure class="mb-5">
          <blockquote class="blockquote">
            <p class="mb-0">Todos buscan un maestro perfecto; lo que pasa es que los maestros son humanos, aunque sus enseñanzas puedan ser divinas, y eso es algo que a la gente le cuesta aceptar. No hay que confundir al profesor con la clase, el ritual con el éxtasis, el transmisor del símbolo con el símbolo mismo.</p>

          </blockquote>
          <figcaption class="blockquote-footer">
          Paulo Coelho, <cite title="Source Title">Novelista</cite>
          </figcaption>
        </figure>

        <div class="row mb-5">
        <div class="col-md-4">
          <div class="card text-white bg-primary mb-3">
            <div class="card-header">Profesorado</div>
            <div class="card-body">
              <h4 class="card-title">Gestiona tu Perfil</h4>
              <p class="card-text">Consulta y edita tus datos personales, sigue a tus alumnos, gestiona los trabajos de fin de ciclo </p>
            </div>
            </div>
          </div>
          <div class="col-md-4">
          <div class="card text-white bg-success mb-3">
            <div class="card-header">Alumnado</div>
            <div class="card-body">
              <h4 class="card-title">Gestiona tus Alumnos</h4>
              <p class="card-text">Consulta el listado, comprueba sus detalles, gestiona el incurrido de los días de trabajo</p>
            </div>
          </div>
          </div>
          <div class="col-md-4">
          <div class="card text-white bg-warning mb-3">
            <div class="card-header">TFG</div>
            <div class="card-body">
              <h4 class="card-title">Gestiona los Trabajos de Fin de Ciclo</h4>
              <p class="card-text">Consulta los detalles, crea, edita y elimina las reuniones con tu alumno</p>
            </div>
            </div>
          </div>
          
        </div>
        <div id="carouselExampleIndicators" class="carousel slide mb-5" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className='container'>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="nervion.png" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="clases.PNG" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="replicaTeacher.PNG" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


        </div>
        
      </div>
    <FooterTeacher/>
    </div>
  )
}