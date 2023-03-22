import React from 'react'
import CategoriaCard from './CategoriaCard'
import '../../styles/CategoriaList.css'
import useFetchCategorias from '../../hooks/useFetchCategorias'
import useFetchProductos from '../../hooks/useFetchProductos'
import { Link } from 'react-router-dom'

const CategoriaList = () => {

  const { isLoading, categorias } = useFetchCategorias()
  const { productos } = useFetchProductos()

  const cantidad = () => {
    let cantidadEconomico = 0;
    let cantidadDeLujo = 0;
    let cantidadCamioneta = 0;
    let cantidadDeportivo = 0;

    productos.map(prod => {
      switch (prod.categoria.titulo) {
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
    })

    return [cantidadEconomico, cantidadDeportivo, cantidadDeLujo, cantidadCamioneta]
  }


  return (
    <>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="categorys">
        {categorias.map((cate) => (
          <Link className='link-to-category'
            to={"producto/categoria"}
            state={cate.titulo}
            key={cate.id}
          >
            <CategoriaCard
              {...cate}
              cantidad={cantidad()}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default CategoriaList
