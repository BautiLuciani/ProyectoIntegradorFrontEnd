import React from 'react'
import '../../styles/CategoriaCard.css'

const CategoriaCard = ({ titulo, imagen }) => {

  let cantidadEconomico = 0;
  let cantidadDeLujo = 0;
  let cantidadCamioneta = 0;
  let cantidadDeportivo = 0;

  switch (titulo) {
    case "Economico":
      cantidadEconomico += 1
      break;
    case "Deportivo":
      cantidadDeportivo += 1
      break;
    case "De Lujo":
      cantidadDeLujo += 1
      break;
    case "Camioneta":
      cantidadCamioneta += 1
      break;
    default:
      break;
  }

  return (
    <div>
      <div>
        <img src={imagen} alt={titulo} />
      </div>
      <div>
        <h3>{titulo}</h3>
        {
          (titulo == "Economico")
          ? <p>{cantidadEconomico} disponible(s)</p>
          : (titulo == "Deportivo")
          ? <p>{cantidadDeportivo} disponible(s)</p>
          : (titulo == "De Lujo")
          ? <p>{cantidadDeLujo} disponible(s)</p>
          : (titulo == "Camioneta")
          ? <p>{cantidadCamioneta} disponible(s)</p>
          : <p> 0 disponible(s)</p>
        }
      </div>
    </div>
  )
}

export default CategoriaCard
