import React from 'react'
import AutoList from '../../autos/components/AutoList'
import CategoriaList from '../../autos/components/CategoriaList'

const Body = () => {
  return (
    <>
        <div>
            <h4>Biscar por tipo de auto</h4>
            <CategoriaList/>
        </div>
        <div>
            <h4>Recomendaciones</h4>
            <AutoList/>
        </div>
    </>
  )
}

export default Body