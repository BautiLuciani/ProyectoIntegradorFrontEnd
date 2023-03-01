import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import AuthContext from '../context/AuthContext'
import validateLogin from '../data/validateLogin'
import '../../styles/Login.css'

const LoginPage = () => {

  const {login} = useContext(AuthContext)
  const navegar = useNavigate()
  const [errores, setErrores] = useState({})

  const {form, email, contrasena, onInputChange} = useForm({
    email: '',
    contrasena: '',
  })

  const onFormSubmit = (e) => {
    e.preventDefault()
    setErrores(validateLogin(form, email))
  }

  useEffect(() => {
    if((Object.keys(errores).length === 0) && (email !== "") && (contrasena !== "")){
      login(email)
      navegar('/', {
        replace: true
      })
    }
  
  }, [errores])
  

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
          {errores.login && <p className='mensajeError'>{errores.login}</p>}

          <button className='button-login'>
            Ingresar
          </button>
          <p>
            ¿Aun no tienes cuenta?
            <Link className="link-to-register" to="/acount">
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
