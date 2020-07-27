import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Navbar.css'

const Navbar = () => (
  <header>
        <nav  className="navbar">
            <Link className="links" to="/"> ¿Que se logro?</Link>
            <div>
                <Link className="links" to="/courses">Cursos</Link>
                <Link className="links" to="/projects">Proyectos</Link>
                <Link className="links" to="/sessions">Sesiones</Link>
            </div>
        </nav>
    </header>
)

export default Navbar