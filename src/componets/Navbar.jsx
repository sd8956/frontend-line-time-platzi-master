import React from 'react'
import '../assets/styles/Navbar.css'

const Navbar = () => (
  <header>
        <nav  className="navbar">
            <a className="links" href="/"> ¿Que se logro?</a>
            <div>
                <a className="links" href="#projects">Proyectos</a>
                <a className="links" href="#courses">Cursos</a>
                <a className="links" href="#sessions">Sesiones</a>
            </div>
        </nav>
    </header>
)

export default Navbar