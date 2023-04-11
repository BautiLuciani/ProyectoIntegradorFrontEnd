import React from 'react'
import Header from '../../ui/components/Header'
import Footer from '../../ui/components/Footer'
import { Link } from 'react-router-dom'
import { GoVerified } from 'react-icons/go'
import '../../styles/AddProductAdmin.css'

const AdminExitosaPage = () => {
  return (
    <>
        <Header/>
        <div className='admin-ok'>
            <GoVerified className='product-ok'/>
            <p><b>¡Felicitaciones!</b></p>
            <p>Su producto se ha creado con exito</p>
            <Link className='go-to-home' to={`/home`}>
                ok
            </Link>
        </div>
        <Footer/>
    </>
  )
}

export default AdminExitosaPage