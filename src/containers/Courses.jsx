import React from 'react';
import useInitialState from '../hooks/useInitialState';
import Hero from '../componets/Hero.jsx'
import CourseCard from '../componets/CourseCard'
import '../assets/mainContainer.css'

const API = 'http://localhost:8000/courses';

const title = {
  text: "Cursos"
}

const Courses = () => {

  const initialState = useInitialState(API);

  return (
    <>
      <Hero {...title}></Hero>
      <div className="container">
        {initialState.map(data =>
          <CourseCard key={data._id.$oid} {...data}/>
        )}
      </div>
    </>
  )
}

export  default Courses