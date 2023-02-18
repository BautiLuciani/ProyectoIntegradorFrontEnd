import React from 'react'
import '../../styles/Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/assets/logo 1.png" alt="Logo DB" />
        <p className="slogan">Sentite como en tu hogar</p>
      </div>
      <div className="buttons">
        <button className="btn-register">Crear Cuenta</button>
        <button className="btn-sign-in">Iniciar Sesion</button>
      </div>
    </div>
  )
}

export default Header
