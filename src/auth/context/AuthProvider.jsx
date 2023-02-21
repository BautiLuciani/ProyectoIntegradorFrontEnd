import React, { useReducer } from 'react'
import types from '../types/types'
import AuthContext from './AuthContext'
import authReducer from './authReducer'

const init = ()=>{
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
        user: user
    }
}

const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, {}, init)

    const login = (nombre = '', apellido = '', email = '', contraseña = '')=>{

        const user = {nombre, apellido, email, contraseña}

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action)
    }

    const logout = ()=>{
        localStorage.removeItem('user')

        const action = {
            type: types.logout
        }

        dispatch(action)  
    }

  return (
    <AuthContext.Provider value={{
        ...state,
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider