import React, { useEffect, useState} from 'react'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import '../../styles/Header.css'
import { useJwt } from 'react-jwt'


const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()
  const {pathname, search} = useLocation()
  const lastPath = pathname + search
  
  const cookie = document.cookie
  .split('; ')
  .find(row => row.startsWith('jwt='))
  ?.split('=')[1];

  const { decodedToken } = useJwt(cookie);
  const usuario = JSON.stringify(decodedToken)
  const user = JSON.parse(usuario)
  
  useEffect(() => {
    if (cookie) {
      fetch('http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/users/listar', {
        headers: {
          Authorization: `Bearer ${cookie}`
        }
      })
      .then(response => {
        setLoggedIn(true);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }, []);


  const handleLogout = ()=> {
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setLoggedIn(false);

    navigate('/', {
      replace: true
    })
  }

  /*const nombreMayuscula = () => {
    const restoNombre = user?.nombre.slice(1)
    const restoApellido = user?.apellido.slice(1)
    const nombreCompleto = primeraLetraNombre + restoNombre
    const apellidoCompleto = primeraLetraApellido + restoApellido
    return `${nombreCompleto} ${apellidoCompleto}`
  }*/

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
      <NavLink to="/home" className="logo">
        <img src="/assets/logo 1.png" alt="Logo DB" />
        <p className="slogan">Sentite como en tu hogar</p>
      </NavLink>

      <div className="usuario">
        {loggedIn ? (
          <>
            <section className="iniciales">
              <b>
                BL
              </b>
            </section>
            <p>Bienvenido, {user?.sub}</p>
            <button className="buttons" onClick={handleLogout}>
              Cerrar Sesion
            </button>
          </>
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