import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchDescripcion from '../../hooks/useFetchDescripcion'
import '../../styles/AutoCard.css'

const AutoCard = ({ id, titulo, ciudad, categoria }) => {

  const { descripcion } = useFetchDescripcion()

  return (
    <div className="auto-card">
      <div>
        <img src={categoria?.urlImagen} alt={titulo} />
      </div>
      <div className="info-car">
        <h4 className="info-title">{titulo}</h4>
        <h6 className="info-category">{categoria?.titulo}</h6>
        <p className="info-location">{ciudad?.titulo}</p>
        {
          descripcion.map(desc => {
            if (desc.id == id) {
              return <p key={desc.id} className="info-description"><small>{desc.descripcion.substr(0,70)}...</small></p>
            }
          })
        }
        <Link to={`/producto/${id}`}>
          Ver mas
        </Link>
      </div>
    </div>
  )
}

export default AutoCard
