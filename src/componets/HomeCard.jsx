import React from 'react'
import '../assets/styles/HomeCard.css'

const HomeCard = (title) => (
  <>
    <div className="homeCard">
      <label>{title.text}</label>
    </div>
  </>
)

export default HomeCard