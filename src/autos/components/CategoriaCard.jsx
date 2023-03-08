import React from 'react'
import '../../styles/CategoriaCard.css'

const CategoriaCard = ({ titulo, imagen, cantidad }) => {

  return (
    <div>
      <div>
        <img src={imagen} alt={titulo} />
      </div>
      <div>
        <h3>{titulo}</h3>
        {
          (titulo == "Economico")
          ? <p>{cantidad[0]} disponible(s)</p>
          : (titulo == "Deportivo")
          ? <p>{cantidad[1]} disponible(s)</p>
          : (titulo == "De Lujo")
          ? <p>{cantidad[2]} disponible(s)</p>
          : (titulo == "Camioneta")
          ? <p>{cantidad[3]} disponible(s)</p>
          : <p> 0 disponible(s)</p>
        }
      </div>
    </div>
  )
}

export default CategoriaCard
