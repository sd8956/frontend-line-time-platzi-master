import React from 'react';
import useInitialState from '../hooks/useInitialState';
import CourseCard from '../componets/CourseCard'
import Hero from '../componets/Hero.jsx'
import '../assets/Courses.css'

const API = 'http://localhost:8000/courses';

const title = {
  text: "Cursos"
}

const Courses = () => {

  const initialState = useInitialState(API);

  return (
    <>
      <Hero {...title}></Hero>
      <div className="coursesContainer">
        {initialState.map(data =>
          <CourseCard key={data._id.$oid} {...data}/>
        )}
      </div>
    </>
  )
}

export  default Courses