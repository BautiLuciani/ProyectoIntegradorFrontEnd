import { useEffect, useState } from 'react'
import getCategorias from '../autos/helpers/getCategorias'

const useFetchCategorias = () => {
    const [categorias, setCategorias] = useState([])
    const [isLoading, setIsLoading] = useState(true)

const getCategoria = async()=>{
  const newCategoria = await getCategorias()
  setCategorias(newCategoria)
  setIsLoading(false)
}
  
  useEffect(() => {
    getCategoria()
  }, [])
  
  return {
    categorias,
    isLoading
  }
}

export default useFetchCategorias