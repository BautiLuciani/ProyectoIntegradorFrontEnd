import React from 'react'
import categorias from '../data/categorias'
import CategoriaCard from './CategoriaCard'

const CategoriaList = () => {

    const arregloCategorias = categorias

  return (
    <div>
        {arregloCategorias.map(categoria => (
            <CategoriaCard
                key={categoria.nombre}
                {...categoria}
            />
        ))}
    </div>
  )
}

export default CategoriaList