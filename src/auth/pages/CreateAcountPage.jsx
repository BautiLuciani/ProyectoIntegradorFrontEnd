import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import AuthContext from '../context/AuthContext'
import validate from '../data/validate'
import '../../styles/CreateAccount.css'

const CreateAcountPage = () => {

  const { createAcount } = useContext(AuthContext)
  const navegar = useNavigate()

  const [errors, setErrors] = useState({})
  const [errorApi, setErrorApi] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrors(validate(firstName, lastName, email, password))

    const response = await fetch('http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      })
    });

    if(!response.ok){
      setErrorApi(true)
    }

    return response
  }

  useEffect(() => {
    if ((Object.keys(errors).length === 0) && (firstName !== "") && (lastName !== "") && (email !== "") && (password !== "") && (password !== "")) {
      createAcount(firstName, lastName, email, password)

      navegar('/', {
        replace: true
      })
    }
  }, [errors])


  return (
    <>
      <Header />

      <div className='formCreateAcount'>
        <h3 className='createAccount-title'>Crear Cuenta</h3>
        <form className='formularioCA' onSubmit={handleLogin}>

          <section className='caNombreApellido'>
            <label htmlFor='nombre'>Nombre</label>
            <input
              type="text"
              id='nombre'
              placeholder='Ingrese su nombre'
              name='nombre'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.nombre && <p className='mensajeError'>{errors.nombre}</p>}

            <label htmlFor='apellido'>Apellido</label>
            <input
              type="text"
              id='apellido'
              placeholder='Ingrese su apellido'
              name='apellido'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.apellido && <p className='mensajeError'>{errors.apellido}</p>}
          </section>

          <section className='caEmailContrasena'>
            <label htmlFor='email'>Correo electrónico</label>
            <input
              type="text"
              id='email'
              placeholder='Ingrese su correo'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className='mensajeError'>{errors.email}</p>}

            <label htmlFor='contrasenia'>Contraseña</label>
            <input
              type="password"
              id='contrasenia'
              placeholder='Ingrese su constreña'
              name='contrasenia'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.contrasenia && <p className='mensajeError'>{errors.contrasenia}</p>}

            <label htmlFor='password'>Confirmar contraseña</label>
            <input
              type="password"
              id='password'
              placeholder='Confirme su contraseña'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className='mensajeError'>{errors.password}</p>}
          </section>

          {errors.ingresar && <p className='mensajeError'>{errors.ingresar}</p>}
          {(errorApi) && <p className='mensajeError'>Lamentablemente no ha podido registrarse. Por favor intente más tarde</p>}
          
          <section className='caButton'>
            <button className='createAccount-button'>
              Crear cuenta
            </button>

            <p>
              ¿Ya tienes cuenta?
              <Link className='link-to-login'
                to="/login"
              >
                Iniciar sesión
              </Link>
            </p>
          </section>

        </form>
      </div>

      <Footer />
    </>
  )
}

export default CreateAcountPage