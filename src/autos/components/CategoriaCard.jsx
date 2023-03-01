import React from 'react'
import '../../styles/CategoriaCard.css'

const CategoriaCard = ({img, nombre, cantidad}) => {
  return (
    <div className='category-card'>
        <div>
            <img src={img} alt={nombre} />
        </div>
        <div className='info'>
            <h3>{nombre}</h3>
            <p className='quantity'>{cantidad} disponible(s)</p>
        </div>
    </div>
  )
}

export default CategoriaCard
