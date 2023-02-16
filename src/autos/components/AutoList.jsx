import React from 'react'
import autos from '../data/autos'
import AutoCard from './AutoCard'

const AutoList = () => {

    const arregloaAutos = autos

  return (
    <div>
        {arregloaAutos.map(auto=>(
            <AutoCard
                key={auto.title}
                {...auto}
            />
        ))}
    </div>
  )
}

export default AutoList