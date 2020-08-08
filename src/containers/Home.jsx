import React from 'react'
import Hero from '../componets/Hero.jsx'
import Slider from '../componets/Slider.jsx'
import CourseSlider from '../componets/CourseSlider.jsx'
import SessionsSlider from '../componets/SessionsSlider.jsx'
import '../assets/Home.css'

const title = {
  text: "¿Que se logro en tres meses?"
}

const Home = () => (
  <>
    <Hero {...title}></Hero>
    <section className="basicContainer" id="projects">
      <div><h1>Proyectos</h1></div>
      <Slider></Slider>
    </section>

    <section className="basicContainer" id="courses">
      <div><h1>Cursos</h1></div>
      <CourseSlider></CourseSlider>
    </section>

    <section className="basicContainer" id="sessions">
      <div><h1>Sesiones Tecnicas</h1></div>   
      <SessionsSlider></SessionsSlider>
    </section>
  </>
)

export default Home