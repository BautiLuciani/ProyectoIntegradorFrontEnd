import React from 'react'
import AutoList from '../../autos/components/AutoList'
import CategoriaList from '../../autos/components/CategoriaList'
import '../../styles/Body.css'

const Body = () => {
  return (
    <div className="body">
      <div className="filter-by-car">
        <h4 className="filter-by-car-title">Buscar por tipo de auto</h4>
        <CategoriaList />
      </div>
      <div className="recommendations">
        <h4 className="recommendations-title">Recomendaciones</h4>
        <AutoList />
      </div>
    </div>
  )
}

export default Body
