import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchDescripcion from '../../hooks/useFetchDescripcion'
import useFetchImagenes from '../../hooks/useFetchImagenes'
import '../../styles/AutoCard.css'

const AutoCard = ({ id, titulo, ciudad, categoria }) => {

  const { imagenes } = useFetchImagenes()
  const { descripcion } = useFetchDescripcion()

  return (
    <div className="auto-card">
      <div>
        {
          imagenes.map(img => {
            if ((img.producto.id == id) && (img.titulo?.includes("Imagen Principal"))) {
              return <img key={img.id} src={img.url} alt={img.titulo} />
            }
          })
        }
      </div>
      <div className="info-car">
        <h4 className="info-title">{titulo}</h4>
        <h6 className="info-category">{categoria?.titulo}</h6>
        <p className="info-location">{ciudad?.titulo}</p>
        {
          descripcion.map(desc => {
            if (desc.id == id) {
              return <p key={desc.id} className="info-description"><small>{desc.descripcion.substr(0, 70)}...</small></p>
            }
          })
        }
        <Link className='info-view-more' to={`/producto/${id}`}>
          Ver mas
        </Link>
      </div>
    </div>
  )
}

export default AutoCard
