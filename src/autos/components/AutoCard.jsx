import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/AutoCard.css'

const AutoCard = ({ id, img, category, title, location, description }) => {
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
        <Link className=' info-view-more' to={`/producto/${id}`}>
          Ver mas
        </Link>
      </div>
    </div>
  )
}

export default AutoCard
