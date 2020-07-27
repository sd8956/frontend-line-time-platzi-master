import React from 'react'
import Hero from '../componets/Hero.jsx'
import useInitialState from '../hooks/useInitialState';
import SessionsCard from '../componets/SessionsCard.jsx'
import '../assets/mainContainer.css'

const title = {
  text: "Sesiones Tecnicas"
}

const API = 'http://localhost:8000/sessions';

const Sessions = () => {

  const initialState = useInitialState(API);

  return (
    <>
      <Hero {...title}></Hero>
      <div className="container">
        {initialState.map(data =>
          <SessionsCard key={data._id.$oid} {...data}/>
        )}
      </div>
    </>
  )
}

export default Sessions