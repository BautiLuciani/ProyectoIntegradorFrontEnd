import { useState } from "react"
import getUsuarios from "../autos/helpers/getUsuarios"
import { useEffect } from "react"

const useFetchUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])

const getUsuario = async()=>{
  const newUsuario = await getUsuarios()
  setUsuarios(newUsuario)
}
  
  useEffect(() => {
    getUsuario()
  }, [])
  
  return {
    usuarios
  }
}

export default useFetchUsuarios