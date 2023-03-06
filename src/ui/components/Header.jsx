import React, {useContext} from 'react'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import AuthContext from '../../auth/context/AuthContext'
import '../../styles/Header.css'


const Header = () => {
  const {logged, user, logout} = useContext(AuthContext)
  const navigate = useNavigate()
  const {pathname, search} = useLocation()
  const lastPath = pathname + search

  const primeraLetraNombre = user?.nombre.charAt(0).toUpperCase()
  const primeraLetraApellido = user?.apellido.charAt(0).toUpperCase()

  const nombreMayuscula = () => {
    const restoNombre = user?.nombre.slice(1)
    const restoApellido = user?.apellido.slice(1)
    const nombreCompleto = primeraLetraNombre + restoNombre
    const apellidoCompleto = primeraLetraApellido + restoApellido
    return `${nombreCompleto} ${apellidoCompleto}`
  }

  const onCreateAcount = () => {
    navigate('/acount')
  }

  const onLogin = () => {
    navigate('/login')
  }

  const onLogout = () => {
    logout()

    navigate('/', {
      replace: true
    })
  }

  return (
    <div
      className={
        lastPath == '/login'
          ? 'login'
          : lastPath == '/acount'
          ? 'createAcount'
          : 'header'
      }>
      <NavLink to="/home" className="logo">
        <img src="/assets/logo 1.png" alt="Logo DB" />
        <p className="slogan">Sentite como en tu hogar</p>
      </NavLink>

      <div className="usuario">
        {logged ? (
          <div className='user'>
            <section>
              <b className='initials'>
                {primeraLetraNombre}
                {primeraLetraApellido}
              </b>
            </section>
            <p className='welcome-mensagge'>Bienvenido, {nombreMayuscula()}</p>
            <button className="buttons" onClick={onLogout}>
              Cerrar Sesion
            </button>
          </div>
        ) : lastPath === '/login' ? (
          <button className="buttons" onClick={onCreateAcount}>
            {' '}
            Crear Cuenta{' '}
          </button>
        ) : lastPath === '/acount' ? (
          <button className="buttons" onClick={onLogin}>
            {' '}
            Iniciar Sesion{' '}
          </button>
        ) : (
          <>
            <button className="buttons" onClick={onCreateAcount}>
              Crear Cuenta
            </button>
            <button className="buttons" onClick={onLogin}>
              Iniciar Sesion
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
