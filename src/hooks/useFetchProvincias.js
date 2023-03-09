import { useEffect, useState } from 'react'
import getProvincias from '../autos/helpers/getProvincias'

const useFetchProvincias = () => {
    const [provincias, setProvincias] = useState([])

const getProvincia = async()=>{
  const newProvincia = await getProvincias()
  setProvincias(newProvincia)
}
  
  useEffect(() => {
    getProvincia()
  }, [])
  
  return {
    provincias
  }
}

export default useFetchProvincias