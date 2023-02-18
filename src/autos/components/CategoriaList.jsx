import React from 'react'
import categorias from '../data/categorias'
import CategoriaCard from './CategoriaCard'
import '../../styles/CategoriaList.css'

const CategoriaList = () => {
  const arregloCategorias = categorias

  return (
    <div className="categorys">
      {arregloCategorias.map((categoria) => (
        <CategoriaCard key={categoria.nombre} {...categoria} />
      ))}
    </div>
  )
}

export default CategoriaList
