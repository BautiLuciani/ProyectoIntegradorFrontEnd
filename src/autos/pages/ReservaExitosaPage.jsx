import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import { GoVerified } from 'react-icons/go'
import '../../styles/ReservaExitosa.css'


const ReservaExitosaPage = () => {
  return (
    <>
        <Header/>
        <div className='booking-confirmed'>
            <GoVerified className='icon-verified'/>
            <p><b>¡Muchas gracias!</b></p>
            <p>Su reserva se ha realizado con exito</p>
            <Link className='link-to-home' to={`/home`}>
                ok
            </Link>
        </div>
        <Footer/>
    </>
  )
}

export default ReservaExitosaPage