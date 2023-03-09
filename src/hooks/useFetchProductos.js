import { useEffect, useState } from 'react'
import getProductos from '../autos/helpers/getProductos'

const useFetchProductos = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

const getProducto = async()=>{
  const newProducto = await getProductos()
  setProductos(newProducto)
  setCargando(false)
}
  
  useEffect(() => {
    getProducto()
  }, [])
  
  return {
    productos,
    cargando
  }
}

export default useFetchProductos