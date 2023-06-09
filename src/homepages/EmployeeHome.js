import React from 'react'
import FooterEmployee from '../layout/FooterEmployee'
import NavbarEmployee from '../layout/NavbarEmployee'



export default function EmployeeHome() {

  return (
    <div>

    <NavbarEmployee/>
    <div class="container">
        <div class="container mt-5 mb-5">
          <h2>¡Bienvenido, Tutor Laboral! <i class="fa-solid fa-graduation-cap"></i></h2>
        </div>
        <figure class="mb-5">
          <blockquote class="blockquote">
            <p class="mb-0">La tarea del educador moderno no es cortar selvas, sino regar desiertos</p>

          </blockquote>
          <figcaption class="blockquote-footer">
          Clive Staples Lewis, <cite title="Source Title">Educador</cite>
          </figcaption>
        </figure>

        <div class="row mb-5">
        <div class="col-md-4">
          <div class="card text-white bg-primary mb-3">
            <div class="card-header">Prácticas</div>
            <div class="card-body">
              <h4 class="card-title">Gestiona las Prácticas de empresa</h4>
              <p class="card-text">Consulta el listado, encuentra los alumnos asociados, edita y valida las jornadas de trabajo </p>
            </div>
            </div>
          </div>
          <div class="col-md-4">
          <div class="card text-white bg-success mb-3">
            <div class="card-header">Alumnado</div>
            <div class="card-body">
              <h4 class="card-title">Gestiona los Alumnos</h4>
              <p class="card-text">Consulta los alumnos que realizan las prácticas, comprueba sus detalles, TFG y prácticas</p>
            </div>
          </div>
          </div>
          <div class="col-md-4">
          <div class="card text-white bg-warning mb-3">
            <div class="card-header">Jornadas de Trabajo</div>
            <div class="card-body">
              <h4 class="card-title">Gestiona el Trabajo Incurrido</h4>
              <p class="card-text">Consulta la lista de jornadas en cada práctica, agrega docentes, consulta los alumnos y edita los TFGs</p>
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
                <img src="replicaEmployee.PNG" class="d-block w-100" alt="..." />
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
    <FooterEmployee/>
    </div>
  )
}