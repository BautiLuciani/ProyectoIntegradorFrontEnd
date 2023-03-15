import { useEffect, useState } from 'react'
import getDescripcion from '../autos/helpers/getDescripcion'

const useFetchDescripcion = () => {
    const [descripcion, setDescripcion] = useState([])

const getDescripciones = async()=>{
  const newDescripcion = await getDescripcion()
  setDescripcion(newDescripcion)
}
  
  useEffect(() => {
    getDescripciones()
  }, [])
  
  return {
    descripcion
  }
}

export default useFetchDescripcion