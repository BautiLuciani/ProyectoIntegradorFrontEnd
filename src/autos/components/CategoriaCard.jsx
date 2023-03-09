import React from 'react'
import '../../styles/CategoriaCard.css'

const CategoriaCard = ({ titulo, imagen, cantidad }) => {

  return (
    <div className='category-card' >
      <div >
        <img src={imagen} alt={titulo} />
      </div>
      <div>
        <div className='info'>
          <h3>{titulo}</h3>
          {
            (titulo == "Economico")
              ? <p className='quantity'>{cantidad[0]} disponible(s)</p>
              : (titulo == "Deportivo")
                ? <p className='quantity'>{cantidad[1]} disponible(s)</p>
                : (titulo == "De Lujo")
                  ? <p className='quantity'>{cantidad[2]} disponible(s)</p>
                  : (titulo == "Camioneta")
                    ? <p className='quantity'>{cantidad[3]} disponible(s)</p>
                    : <p> 0 disponible(s)</p>
          }
        </div>
      </div>
    </div>
  )
}

export default CategoriaCard
