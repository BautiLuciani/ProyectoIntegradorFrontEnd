import React from 'react'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import '../../styles/Header.css'

const Header = () => {
  const navigate = useNavigate()
  const {pathname, search} = useLocation()
  const lastPath = pathname + search

  const onCreateAcount = () => {
    navigate('/acount')
  }

  const onLogin = () => {
    navigate('/login')
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
      <NavLink to="/" className="logo">
        <img src="/assets/logo 1.png" alt="Logo DB" />
        <p className="slogan">Sentite como en tu hogar</p>
      </NavLink>

      <div className="buttons">
        {lastPath === '/login' ? (
          <button onClick={onCreateAcount}> Crear Cuenta </button>
        ) : lastPath === '/acount' ? (
          <button onClick={onLogin}> Iniciar Sesion </button>
        ) : (
          <>
            <button onClick={onCreateAcount}>Crear Cuenta</button>
            <button onClick={onLogin}>Iniciar Sesion</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
