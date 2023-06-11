import React from 'react'
import FooterAdminHome from '../layout/FooterAdmin'
import Navbar from '../layout/NavbarAdmin'



export default function Home() {

  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="container mt-5 mb-5">
          <h2>¡Bienvenido, Administrador! <i class="fa-solid fa-graduation-cap"></i></h2>
        </div>
        <figure class="mb-5">
          <blockquote class="blockquote">
            <p class="mb-0">Quien vive con más desahogo no es el que tiene más, sino el que administra bien lo mucho o poco que tiene.</p>

          </blockquote>
          <figcaption class="blockquote-footer">
            Ángel Ganivet, <cite title="Source Title">Economista</cite>
          </figcaption>
        </figure>

        <div class="row mb-5">
          <div class="col-md-4">
          <div class="card text-white bg-primary mb-3">
            <div class="card-header">Alumnado</div>
            <div class="card-body">
              <h4 class="card-title">Gestiona los Alumnos</h4>
              <p class="card-text">Consulta el listado, agrega estudiantes, edita los TFGs y organiza las prácticas de empresa</p>
            </div>
          </div>
          </div>
          <div class="col-md-4">
          <div class="card text-white bg-success mb-3">
            <div class="card-header">Profesorado</div>
            <div class="card-body">
              <h4 class="card-title">Gestiona los Profesores</h4>
              <p class="card-text">Consulta el listado, agrega docentes, consulta los alumnos y edita los TFGs</p>
            </div>
            </div>
          </div>
          <div class="col-md-4">
          <div class="card text-white bg-warning mb-3">
            <div class="card-header">Tutores</div>
            <div class="card-body">
              <h4 class="card-title">Gestiona los Tutores de Empresa</h4>
              <p class="card-text">Consulta el listado, agrega tutores, edita los TFGs y organiza las prácticas de empresa</p>
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
          <div className='container '>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="nervion.png" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="clases.PNG" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="replicaUser.PNG" class="d-block w-100" alt="..." />
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
      <div class="mt-5">
      <FooterAdminHome />
      </div>
      
    </div>
  )
}