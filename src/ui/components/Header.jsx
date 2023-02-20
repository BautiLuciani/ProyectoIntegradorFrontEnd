import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import AuthContext from '../../auth/context/AuthContext'

const Header = () => {

    const {logged, user} = useContext(AuthContext)
    const navigate = useNavigate()
    const { pathname, search } = useLocation()
    const lastPath = pathname + search

    const onCreateAcount = () => {
        navigate("/acount")
    }

    const onLogin = () => {
        navigate("/login")
    }

    return (
        <div className='header'>
            <NavLink
                to="/"
                className='logo'
            >
                <img src="/assets/logoDH.png" alt="Logo DB" />
                <p>Sentite como en tu hogar</p>
            </NavLink>

            <div>
                {
                    (lastPath === '/login')
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