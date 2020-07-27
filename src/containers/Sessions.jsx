import React from 'react'
import Hero from '../componets/Hero.jsx'

const title = {
  text: "Sesiones Tecnicas"
}

const Sessions = () => {

  return (
    <>
      <Hero {...title}></Hero>
      <h1>Sessions</h1>
    </>
  )
}

export default Sessions