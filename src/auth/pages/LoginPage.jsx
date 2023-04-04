import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import validateLogin from '../data/validateLogin'
import '../../styles/Login.css'
import Cookies from 'js-cookie'
import { useContextGlobal } from '../../context/globalContext'

const LoginPage = () => {

  const navegar = useNavigate()
  const [errores, setErrores] = useState({})
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [registradoError, setRegistradoError] = useState(false)
  const {userReserva, idProducto} = useContextGlobal()

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrores(validateLogin(email, password))
      return;
    }

    try {
      fetch('http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then(respuesta => respuesta.text())
        .then(token => {
          document.cookie = `jwt=${token}; path=/;`
          handleLoginSuccess()
        })
    } catch (error) {
      console.log(error);
    }
  }

  const handleLoginSuccess = ()=> {
    const token = Cookies.get('jwt')
    if (!token || token.includes('Credenciales erróneas')) {
      setRegistradoError(true)
    } else {
      (userReserva)
      ? navegar(`/producto/${idProducto}/reserva`)
      : navegar('/home')
    }
  }

  return (
    <>
      <Header />

      <div className='formLogin'>
        {(userReserva) && <p className='mensajeError'>Para hacer una reserva debe iniciar sesion</p>}
        <h3>Iniciar Sesion</h3>
        <form className='formualarioLogin' onSubmit={handleLogin}>

          <label htmlFor='correo'>Correo electrónico</label>
          <input
            type="text"
            id='correo'
            placeholder='Ingrese su correo'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor='contrasena'>Contraseña</label>
          <input
            type="password"
            id='contrasena'
            placeholder='Ingrese su constreña'
            name='contrasena'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errores.login && <p className='mensajeError'>{errores.login}</p>}
          {registradoError && <p className='mensajeError'>Usuario incorrecto</p>}
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
