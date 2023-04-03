import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import '../../styles/Header.css'
import { useJwt } from 'react-jwt'
import useFetchUsuarios from '../../hooks/useFetchUsuarios'


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const navigate = useNavigate()
  const { pathname, search } = useLocation()
  const {usuarios} = useFetchUsuarios()
  const lastPath = pathname + search

  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('jwt='))
    ?.split('=')[1];

  const { decodedToken } = useJwt(cookie);
  const usuario = JSON.stringify(decodedToken)
  const user = JSON.parse(usuario)

  const role = user?.authorities[0]?.authority

  const usuarioDatos = usuarios.filter(u => u.email == user?.sub)
  
  useEffect(() => {
    setNombre(usuarioDatos[0]?.first_name)
    setApellido(usuarioDatos[0]?.last_name)
  }, [usuarioDatos])

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


  const handleLogout = () => {
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setLoggedIn(false);

    navigate('/', {
      replace: true
    })
  }

  const primeraLetraNombre = nombre?.toUpperCase().charAt(0)
  const primeraLetraApellido = apellido?.toUpperCase().charAt(0)

  const nombreMayuscula = () => {
    const restoNombre = nombre.slice(1)
    const restoApellido = apellido.slice(1)
    const nombreCompleto = primeraLetraNombre + restoNombre
    const apellidoCompleto = primeraLetraApellido + restoApellido
    return `${nombreCompleto} ${apellidoCompleto}`
  }

  const toggleMenu = ()=> {
    setMenuOpen(!menuOpen)
  }

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
            {(role == 'ROLE_ADMIN') &&
              <div>
                <Link
                  to={'/administracion'}
                >
                  Administracion
                </Link>
              </div>
            }
            <div>
              <section className="iniciales">
                <b>
                  {`${primeraLetraNombre}${primeraLetraApellido}`}
                </b>
              </section>
              <p>Bienvenido, {nombreMayuscula()}</p>
              <button className="buttons" onClick={handleLogout}>
                Cerrar Sesion
              </button>
            </div>
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