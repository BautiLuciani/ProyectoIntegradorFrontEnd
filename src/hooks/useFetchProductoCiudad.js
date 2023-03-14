import { useEffect, useState } from 'react'
import getProductoCiudad from '../autos/helpers/getProductoCiudad'

const useFetchProductosCiudad = (ciudad) => {
    const [provincia, setProvincia] = useState([])
    const [charging, setCharging] = useState(true)

const getCiudad = async()=>{
  const newProductoCiudad = await getProductoCiudad(ciudad)
  setProvincia(newProductoCiudad)
  setCharging(false)
}
  
  useEffect(() => {
    getCiudad()
  }, [])
  
  return {
    provincia,
    charging
  }
}

export default useFetchProductosCiudad