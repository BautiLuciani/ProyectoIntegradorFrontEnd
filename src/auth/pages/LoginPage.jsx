import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import validate from '../data/validate'

const LoginPage = () => {

  const [errors, setErrors] = useState({})

  const {form, email, contrasena, onInputChange} = useForm({
    email: '',
    contrasena: '',
  })

  const onFormSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(form))
  }

  useEffect(() => {
    if((Object.keys(errors).length === 0) && (email !== "") && (contrasena !== "")){
      console.log("Login...");
    }
  }, [errors])

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
          {errors.email && <p className='mensajeError'>{errors.email}</p>}

          <label htmlFor='contrasena'>Contraseña</label>
          <input
            type="password"
            id='contrasena'
            placeholder='Ingrese su constreña'
            name='contrasena'
            value={contrasena}
            onChange={onInputChange}
          />
          {errors.contrasena && <p className='mensajeError'>{errors.contrasena}</p>}

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