import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'

const LoginPage = () => {

  const [error, setError] = useState()

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

          {
            (error == true) && <p className='mensajeError'>Por favor vuelva a intentarlo, sus credenciales son inválidas</p>
          }

          <button
            onClick={()=>setError(true)}
          >
            Ingresar
          </button>
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