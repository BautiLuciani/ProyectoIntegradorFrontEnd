import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'

const LoginPage = () => {
  return (
    <>
      <Header />

      <div className='formLogin'>
        <h3>Iniciar Sesion</h3>
        <form className='formualarioLogin'>

          <label htmlFor='correo'>Correo electrónico</label>
          <input
            type="email"
            id='correo'
          />

          <label htmlFor='contrasena'>Contraseña</label>
          <input
            type="password"
            id='contrasena'
          />

          <button>Ingresar</button>
          <p>
            ¿Aun no tienes cuenta?
            <Link
              to="/acount"
            >
              Registrate
            </Link>
          </p>
        </form>
      </div>

      <Footer/>
    </>
  )
}

export default LoginPage