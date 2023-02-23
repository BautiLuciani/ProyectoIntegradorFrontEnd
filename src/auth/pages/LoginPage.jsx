import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'

const LoginPage = () => {

  const [mensaje, setMensaje] = useState(false)

  const {email, contrasena, onInputChange} = useForm({
    email: '',
    contrasena: '',
  })

  const onFormSubmit = (e) => {
    e.preventDefault()
    setMensaje(true)
  }

  return (
    <>
      <Header />

      <div className='formLogin'>
        <h3>Iniciar Sesion</h3>
        <form className='formualarioLogin' onSubmit={onFormSubmit}>

          <label htmlFor='correo'>Correo electrónico</label>
          <input
            type="text"
            id='correo'
            placeholder='Ingrese su correo'
            name='email'
            value={email}
            onChange={onInputChange}
          />

          <label htmlFor='contrasena'>Contraseña</label>
          <input
            type="password"
            id='contrasena'
            placeholder='Ingrese su constreña'
            name='contrasena'
            value={contrasena}
            onChange={onInputChange}
          />
          {mensaje && <p className='mensajeError'>Los datos ingresados son incorrectos</p>}

          <button>
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

      <Footer />
    </>
  )
}

export default LoginPage