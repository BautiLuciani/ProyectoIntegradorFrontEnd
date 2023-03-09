import { useEffect, useState } from 'react'
import getCategorias from '../autos/helpers/getCategorias'
import getImagenesProductos from '../autos/helpers/getImagenesProductos'

const useFetchImagenes = () => {
    const [imagenes, setImagenes] = useState([])

const getImagenes = async()=>{
  const newImagen = await getImagenesProductos()
  setImagenes(newImagen)
}
  
  useEffect(() => {
    getImagenes()
  }, [])
  
  return {
    imagenes
  }
}

export default useFetchImagenes