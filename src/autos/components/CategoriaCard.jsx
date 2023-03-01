import React from 'react'
import '../../styles/CategoriaCard.css'

const CategoriaCard = ({img, nombre, cantidad}) => {
  return (
    <div>
        <div>
            <img src={img} alt={nombre} />
        </div>
        <div>
            <h3>{nombre}</h3>
            <p>{cantidad} disponible(s)</p>
        </div>
    </div>
  )
}

export default CategoriaCard
