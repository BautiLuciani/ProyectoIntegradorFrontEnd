import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import AuthContext from '../context/AuthContext'

const CreateAcountPage = () => {

  const [mensaje, setMensaje] = useState({
    verificado: false,
    error: false
  })
  const {login} = useContext(AuthContext)
  const navegar = useNavigate()

  const {nombre, apellido, email, contrasenia, password, onInputChange} = useForm({
    nombre: '',
    apellido: '',
    email: '',
    contrasenia: '',
    password: ''
  })

  const onLogin = ()=> {
    if(mensaje.verificado == true) {
      login(nombre, apellido, email, contrasenia)

      navegar('/', {
        replace: true
      })
    } else {
      setMensaje({...mensaje, error: true})
    }
  }

  const onFormSubmit = (e)=>{
    e.preventDefault()
    
    if(
      !email.includes('@') || 
      !email.includes('.com') || 
      contrasenia.length < 6 ||
      !(contrasenia===password)
    ) return

    setMensaje({...mensaje, verificado: true})
  }
  
  return (
    <>
      <Header />

      <div className='formCreateAcount'>
        <h3>Crear Cuenta</h3>
        <form className='formularioCA' onSubmit={onFormSubmit}>

          <section className='caNombreApellido'>
            <label htmlFor='nombre'>Nombre</label>
            <input
              type="text"
              id='nombre'
              placeholder='Ingrese su nombre'
              name='nombre'
              value={nombre}
              onChange={onInputChange}
              required 
            />

            <label htmlFor='apellido'>Apellido</label>
            <input
              type="text"
              id='apellido'
              placeholder='Ingrese su apellido'
              name='apellido'
              value={apellido}
              onChange={onInputChange}
              required
            />
          </section>

          <section className='caEmailContrasena'>
            <label htmlFor='email'>Correo electrónico</label>
            <input
              type="email"
              id='email'
              placeholder='Ingrese su correo'
              name='email'
              value={email}
              onChange={onInputChange}
              required
            />

            <label htmlFor='contrasenia'>Contraseña</label>
            <input 
              type="password"
              placeholder='Ingrese su constreña'
              name='contrasenia'
              value={contrasenia}
              onChange={onInputChange}
              required
            />

            <label htmlFor='password'>Confirmar contraseña</label>
            <input
              type="password"
              id='password'
              placeholder='Confirme su contraseña'
              name='password'
              value={password}
              onChange={onInputChange}
              required
            />
          </section>

          <section className='caButton'>
            <button onClick={onLogin}>
              Crear cuenta
            </button>

            {
              (mensaje.error == true) && <p className='mensajeError'>Por favor vuelva a intentarlo, sus credenciales son inválidas</p>
            }

            <p>
              ¿Ya tienes cuenta?
              <Link
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