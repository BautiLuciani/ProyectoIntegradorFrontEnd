import React, { useContext, useEffect, useState } from 'react'
import { Cookies } from 'react-cookie';
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
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const cookies = new Cookies

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrores(validateLogin(email, password))

    const response = await fetch('http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    
    const token = response.headers.get('JWT'); // Obtener el valor de la cookie
    console.log(token);
    if (response.ok) {
      cookies.set('JWT', token); // almacenar la cookie en el navegador
    } else {
      console.log('Error al iniciar sesión'); // manejar el error de autenticación
    }

    return response
  }

  useEffect(() => {
    if((Object.keys(errores).length === 0) && (email !== "") && (password !== "")){
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
