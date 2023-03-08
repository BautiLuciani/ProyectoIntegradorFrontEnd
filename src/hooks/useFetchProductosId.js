import { useEffect, useState } from 'react'
import getProductById from '../autos/helpers/getProductoById'

const useFetchProductosId = (id) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

const getProducto = async()=>{
  const productId = await getProductById(id)
  setProducts(productId)
  setLoading(false)
}
  
  useEffect(() => {
    getProducto()
  }, [])
  
  return {
    products,
    loading
  }
}

export default useFetchProductosId