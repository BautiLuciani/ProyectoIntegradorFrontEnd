import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import AuthContext from '../../auth/context/AuthContext'


const Header = () => {

    const { logged, user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const { pathname, search } = useLocation()
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
        navigate("/acount")
    }

    const onLogin = () => {
        navigate("/login")
    }

    const onLogout = () => {
        logout()

        navigate('/', {
            replace: true
        })
    }

    return (
        <div
            className={(lastPath == '/login')
                ? 'login'
                : (lastPath == '/acount')
                    ? 'createAcount'
                    : 'header'
            }
        >
            <NavLink
                to="/"
                className='logo'
            >
                <img src="/assets/logoDH.png" alt="Logo DB" />
                <p>Sentite como en tu hogar</p>
            </NavLink>

            <div className='usuario'>
                {
                    (logged)
                        ?
                        <>
                            <section className='iniciales'><b>{primeraLetraNombre}{primeraLetraApellido}</b></section>
                            <p>Bienvenido, {nombreMayuscula()}</p>
                            <button
                                onClick={onLogout}
                            >
                                Cerrar Sesion
                            </button>
                        </>
                        : (lastPath === '/login')
                            ? <button onClick={onCreateAcount}> Crear Cuenta </button>
                            : (lastPath === '/acount')
                                ? <button onClick={onLogin}> Iniciar Sesion </button>
                                :
                                <>
                                    <button
                                        onClick={onCreateAcount}
                                    >
                                        Crear Cuenta
                                    </button>
                                    <button
                                        onClick={onLogin}
                                    >
                                        Iniciar Sesion
                                    </button>
                                </>
                }
            </div>
        </div>
    )
}

export default Header