import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import '../../styles/Login.css'

const LoginPage = () => {
  return (
    <>
      <Header />

      <div className="formLogin">
        <h3 className="formLogin-title">Iniciar Sesion</h3>
        <form className="formualarioLogin">
          <label htmlFor="correo">Correo electrónico</label>
          <input type="email" id="correo" />

          <label htmlFor="contrasena">Contraseña</label>
          <input type="password" id="contrasena" />

          <button className="button-login">Ingresar</button>
          <p className="mensagge-register">
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
