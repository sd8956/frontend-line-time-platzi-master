import React from 'react'
import ProjectCard from '../componets/ProjectCard.jsx'
import useInitialState from '../hooks/useInitialState';
import Hero from '../componets/Hero.jsx'
import '../assets/mainContainer.css'

const title = {
  text: "Proyectos"
}

const API = 'http://localhost:8000/projects';

const Projects = () => {

  const initialState = useInitialState(API);

  return (
    <>
      <Hero {...title}></Hero>
      <div className="container">
        {initialState.map(data =>
          <ProjectCard key={data._id.$oid} {...data}/>
        )}
      </div>
    </>
  )
}

export default Projects