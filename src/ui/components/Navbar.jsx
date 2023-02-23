import React, { useState } from 'react'
import provincias from '../data/provincias'
import '../../styles/Navbar.css'


const Navbar = () => {
  const location = provincias

  return (
    <div className='navbar'>
      <h1>Busca ofertas en autos economicos, deportivos y de lujo</h1>
      <form className='formulario'>
        <>
          <label className='select-province-text' htmlFor="provincias">Seleccione una provincia</label>
          <select  className='select-province' name="provincias">
            {location.map(provincias => (
              <option key={provincias} value={provincias}>{provincias}</option>
            ))}
          </select>
        </>
        <>
            <label htmlFor="checkin">Check-In</label>
          <input type="date" id='checkin'/>
          <label htmlFor="checkout">Check-Out</label>
          <input type="date" id='checkout'/>
        </>
        <button className='button-submit'>Buscar</button>
      </form>
    </div>
  )
}

export default Navbar
