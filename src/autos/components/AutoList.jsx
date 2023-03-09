import React from 'react'
import AutoCard from './AutoCard'
import '../../styles/AutoList.css'
import useFetchProductos from '../../hooks/useFetchProductos'

const AutoList = () => {

  const { cargando, productos } = useFetchProductos()

  return (
    <>
      {
        cargando && (<h2>Cargando...</h2>)
      }
      <div className="auto-list">
        {productos.map((prod) => (
          <AutoCard key={prod.id} {...prod} />
        ))}
      </div>
    </>
  )
}

export default AutoList
