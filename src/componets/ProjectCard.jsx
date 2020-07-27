import React from 'react'
import '../assets/styles/ProjectCard.css'


const ProjectCard = (project) => (
  <>
    <article className="ProjectCard">
      <div className="cardDetails">
        <h3>{project.title}</h3>
        <h4>{project.description}</h4>
      </div>
      <figure>
        <img src={project.image} alt={project.title}/>
      </figure>
      <div className="adicionalData">
          <label htmlFor="">Tecnologias: {project.tec}</label>
          <br/>
          <a className="projectURl" href={project.url}>Ver proyecto</a>
      </div>
    </article>
  </>
)

export default ProjectCard