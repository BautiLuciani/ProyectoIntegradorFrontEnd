import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/AutoCard.css'

const AutoCard = ({ id, titulo, ciudad, categoria }) => {

  return (
    <div className="auto-card">
      <div>
        <img src={categoria?.urlImagen} alt={titulo} />
      </div>
      <div className="info-car">
        <h4 className="info-title">{titulo}</h4>
        <h6 className="info-category">{categoria?.titulo}</h6>
        <p className="info-location">{ciudad?.titulo}</p>
        <p className="info-description">
          <small>{categoria?.descripcion}</small>
        </p>
        <Link className='info-view-more' to={`/producto/${id}`}>
          Ver mas
        </Link>
      </div>
    </div>
  )
}

export default AutoCard
