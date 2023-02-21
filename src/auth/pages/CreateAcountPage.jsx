import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import AuthContext from '../context/AuthContext'
import validate from '../data/validate'

const CreateAcountPage = () => {

  const {login} = useContext(AuthContext)
  const navegar = useNavigate()

  const [errors, setErrors] = useState({})

  const {form, nombre, apellido, email, contrasenia, password, onInputChange} = useForm({
    nombre: '',
    apellido: '',
    email: '',
    contrasenia: '',
    password: ''
  })

  const onFormSubmit = (e)=>{
      e.preventDefault()
      setErrors(validate(form))
  }

  useEffect(() => {
    if((Object.keys(errors).length === 0) && (nombre !== "") && (apellido !== "") && (email !== "") && (contrasenia !== "") && (password !== "")){
      login(nombre, apellido, email, contrasenia)
    
      navegar('/', {
        replace: true
      })
    }
  }, [errors])
  

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
            />
            {errors.nombre && <p className='mensajeError'>{errors.nombre}</p>}

            <label htmlFor='apellido'>Apellido</label>
            <input
              type="text"
              id='apellido'
              placeholder='Ingrese su apellido'
              name='apellido'
              value={apellido}
              onChange={onInputChange}
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
              onChange={onInputChange}
            />
            {errors.email && <p className='mensajeError'>{errors.email}</p>}

            <label htmlFor='contrasenia'>Contraseña</label>
            <input 
              type="password"
              placeholder='Ingrese su constreña'
              name='contrasenia'
              value={contrasenia}
              onChange={onInputChange}
            />
            {errors.contrasenia && <p className='mensajeError'>{errors.contrasenia}</p>}

            <label htmlFor='password'>Confirmar contraseña</label>
            <input
              type="password"
              id='password'
              placeholder='Confirme su contraseña'
              name='password'
              value={password}
              onChange={onInputChange}
            />
            {errors.password && <p className='mensajeError'>{errors.password}</p>}
          </section>

          <section className='caButton'>
            <button>
              Crear cuenta
            </button>

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