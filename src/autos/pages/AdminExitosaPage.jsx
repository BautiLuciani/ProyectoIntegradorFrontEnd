import React from 'react'
import Header from '../../ui/components/Header'
import Footer from '../../ui/components/Footer'
import { Link } from 'react-router-dom'
import { GoVerified } from 'react-icons/go'

const AdminExitosaPage = () => {
  return (
    <>
        <Header/>
        <div>
            <GoVerified/>
            <p><b>¡Felicitaciones!</b></p>
            <p>Su producto se ha creado con exito</p>
            <Link to={`/home`}>
                ok
            </Link>
        </div>
        <Footer/>
    </>
  )
}

export default AdminExitosaPage