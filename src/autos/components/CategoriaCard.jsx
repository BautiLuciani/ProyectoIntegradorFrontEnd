import React from 'react'

const CategoriaCard = ({img, nombre, cantidad}) => {
  return (
    <div>
        <div>
            <img src={img} alt={nombre} />
        </div>
        <div>
            <h3>{nombre}</h3>
            <p>{cantidad} disponibles</p>
        </div>
    </div>
  )
}

export default CategoriaCard