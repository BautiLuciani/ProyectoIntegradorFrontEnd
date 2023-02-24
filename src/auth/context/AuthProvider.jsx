import React, { useReducer } from 'react'
import types from '../types/types'
import AuthContext from './AuthContext'
import authReducer from './authReducer'

const init = ()=>{
    return {
        logged: false,
        user: undefined
    }
}

const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, {}, init)

    const createAcount = (nombre = '', apellido = '', email = '', contraseña = '')=>{

        const user = {nombre, apellido, email, contraseña}

        const action = {
            type: types.createAcount,
            payload: user
        }

        localStorage.setItem(`${email}`, JSON.stringify(user))

        dispatch(action)
    }

    
    const login = (email)=>{
        const user = JSON.parse(localStorage.getItem(`${email}`))

        const action = {
            type: types.login,
            payload: user
        }

        dispatch(action)
    }

    const logout = ()=>{

        const action = {
            type: types.logout
        }

        dispatch(action)  
    }

  return (
    <AuthContext.Provider value={{
        ...state,
        createAcount,
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider