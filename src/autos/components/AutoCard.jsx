import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/AutoCard.css'

const AutoCard = ({img, category, title, location, description}) => {
  return (
    <div className="auto-card">
      <div>
        <img src={img} alt={title} />
      </div>
      <div className="info-car">
        <h4 className="info-title">{title}</h4>
        <h6 className="info-category">{category}</h6>
        <p className="info-location">{location}</p>
        <p className="info-description">
          <small>{description}</small>
        </p>
        <button className="info-view-more">Ver Mas</button>
      </div>
    </div>
  )
}

export default AutoCard
