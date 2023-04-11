import { useEffect, useState } from 'react'
import getReservaId from '../autos/helpers/getReservaId'

const useFetchReservaId = (userId) => {
    const [reserva, setReserva] = useState([])
    const [loading, setLoading] = useState(true)

const getReserva = async()=>{
  const reservaId = await getReservaId(userId)
  setReserva(reservaId)
  setLoading(false)
}
  
  useEffect(() => {
    getReserva()
  }, [])
  
  return {
    reserva,
    loading
  }
}

export default useFetchReservaId