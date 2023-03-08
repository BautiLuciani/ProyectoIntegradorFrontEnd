import React from 'react'
import CategoriaCard from './CategoriaCard'
import '../../styles/CategoriaList.css'
import useFetchCategorias from '../../hooks/useFetchCategorias'

const CategoriaList = () => {

  const { isLoading, categorias } = useFetchCategorias()

  return (
    <>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="categorys">
        {categorias.map((cate) => (
          <CategoriaCard key={cate.id} {...cate} />
        ))}
      </div>
    </>
  )
}

export default CategoriaList
