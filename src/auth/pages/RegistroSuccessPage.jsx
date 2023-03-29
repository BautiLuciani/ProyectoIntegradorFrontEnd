import React from 'react'
import { Link } from 'react-router-dom'

const RegistroSuccessPage = () => {
  return (
    <>
    <div>
        <h1>¡Registro Exitoso!</h1>
        <h3>Bienvenido a nuestra plataforma. Esperamos que disfrutes de nuestros servicios.</h3>
        <p>Ya puedes iniciar sesión</p>
        <div>
            <Link to="/home">Ir al inicio</Link>
            <Link to="/login">Iniciar Sesión</Link>
        </div>
    </div>
    </>
  )
}

export default RegistroSuccessPage