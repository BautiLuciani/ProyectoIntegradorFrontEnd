import React from 'react'
import { Link } from 'react-router-dom'

const AutoCard = ({img, category, title, location, description}) => {
  return (
    <div>
        <div>
            <img src={img} alt={title} />
        </div>
        <div>
            <h4>{title}</h4>
            <h6>{category}</h6>
            <p>{location}</p>
            <p><small>{description}</small></p>
            <button>Ver Mas</button>
        </div>
    </div>
  )
}

export default AutoCard