import React from 'react'
import { Link } from 'react-router-dom'



export default function NavbarEmployee() {


 
 
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/"><i class="fa-solid fa-r fa-beat-fade"></i> | Réplica </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/employee_internships">Prácticas Tuteladas</Link>
              </li>
            </ul>
            
            <form class="d-flex">
            
            
              <Link class="btn btn-success" to={"/employee_profile"}> Mi Perfil | <i class="fa-solid fa-user"></i></Link>
            </form>
            
            
          </div>
        </div>
      </nav>
    </div>
  )
}