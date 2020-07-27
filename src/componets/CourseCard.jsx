import React from 'react'
import '../assets/styles/CourseCard.css'

const CourseCard = (course) => (
  <>
    <article className="courseCard">
      <div className="cardDetails">
        <h2>{course.title}</h2>
      </div>
      <figure>
        <img src={course.image} alt={course.title}/>
      </figure>
    </article>
  </>
)

export default CourseCard