import React from 'react'
import '../../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="menssage">
        Busca ofertas en autos economicos, deportivos y de lujo
      </h1>
      <form className="formulario">
        <input type="text" />
        <input type="text" />
        <button className="button-submit">Buscar</button>
      </form>
    </div>
  )
}

export default Navbar
