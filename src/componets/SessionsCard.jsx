import React from 'react'
import '../assets/styles/SessionsCard.css'

const SessionCart = (session) => (
  <>
    <article className="SessionCart">
      <div className="cardDetails">
        <h3>{session.title}</h3>
      </div>
      <div className="adicionalData">
          <label>{session.description}</label>
      </div>
    </article>
    </>
)

export default SessionCart