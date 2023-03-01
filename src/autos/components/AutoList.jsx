import React from 'react'
import autos from '../data/autos'
import AutoCard from './AutoCard'
import '../../styles/AutoList.css'

const AutoList = () => {
  const arregloaAutos = autos

  return (
    <div className="auto-list">
      {arregloaAutos.map((auto) => (
        <AutoCard key={auto.title} {...auto} />
      ))}
    </div>
  )
}

export default AutoList
