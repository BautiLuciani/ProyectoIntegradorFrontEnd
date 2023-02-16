import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src="/assets/logoDH.png" alt="Logo DB" />
            <p>Sentite como en tu hogar</p>
        </div>
        <div>
            <button>
                Crear Cuenta
            </button>
            <button>
                Iniciar Sesion
            </button>
        </div>
    </div>
  )
}

export default Header