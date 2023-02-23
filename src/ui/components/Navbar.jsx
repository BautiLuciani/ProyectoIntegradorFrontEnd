import React, { useState } from 'react'
import provincias from '../data/provincias'


const Navbar = () => {

  const location = provincias

  return (
    <div>
      <h1>Busca ofertas en autos economicos, deportivos y de lujo</h1>
      <form className='formulario'>
        <>
          <label htmlFor="provincias">Seleccione una provincia</label>
          <select name="provincias">
            {location.map(provincias => (
              <option key={provincias} value={provincias}>{provincias}</option>
            ))}
          </select>
        </>
        <>
          <label htmlFor="checkin">Check-In</label>
          <input type="date" id='checkin' />
          <label htmlFor="checkout">Check-Out</label>
          <input type="date" id='checkout' />
        </>
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default Navbar