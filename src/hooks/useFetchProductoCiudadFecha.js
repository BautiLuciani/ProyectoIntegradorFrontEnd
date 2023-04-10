import { useEffect, useState } from 'react'
import getProductoCiudadFecha from '../autos/helpers/getProductoCiudadFecha'

const useFetchProductosCiudadFecha = (ciudad, fechaInicial, fechaFinal) => {
    const [product, setProduct] = useState([])
    const [charging, setCharging] = useState(true)

const getCiudadFecha = async()=>{
  const newProductoCiudadFecha = await getProductoCiudadFecha(ciudad, fechaInicial, fechaFinal)
  setProduct(newProductoCiudadFecha)
  setCharging(false)
}
  
  useEffect(() => {
    getCiudadFecha()
  }, [])
  
  return {
    product,
    charging
  }
}

export default useFetchProductosCiudadFecha