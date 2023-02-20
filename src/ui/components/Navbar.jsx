import React from 'react'
import provincias from '../data/provincias'
import '../../styles/Navbar.css'

const Navbar = () => {
  const location = provincias

  return (
    <div>
      <h1>Busca ofertas en autos economicos, deportivos y de lujo</h1>
      <form className="formulario">
        <select name="provincias">
          {location.map((provincias) => (
            <option key={provincias} value={provincias}>
              {provincias}
            </option>
          ))}
        </select>
        <input type="text" />
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default Navbar
