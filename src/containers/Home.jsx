import React from 'react'
import Hero from '../componets/Hero.jsx'
import HomeCard from '../componets/HomeCard.jsx'
import { Link } from 'react-router-dom'
import '../assets/Home.css'

const title = {
  text: "¿Que se logro en tres meses?"
}

const cards = [
  {
    text: "Cursos",
  },
  {
    text: "Proyectos",
  },
  {
    text: "Sesiones Tecnicas",
  }
]

const Home = () => (
  <>
    <Hero {...title}></Hero>
    <div className="homeContainer">
      <Link to="/courses">
        <HomeCard {...cards[0]}></HomeCard>
      </Link>
      <Link to="/projects">
        <HomeCard {...cards[1]}></HomeCard>
      </Link>
      <Link to="/sessions">
        <HomeCard {...cards[2]}></HomeCard>
      </Link>

    </div>
  </>
)

export default Home