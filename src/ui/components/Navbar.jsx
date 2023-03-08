import React, { useState } from 'react'
import provincias from '../data/provincias'
import '../../styles/Navbar.css'
import DateRangePicker from './DateRangePicker'


const Navbar = () => {
  const location = provincias

  return (
    <div className='navbar'>
      <h1>Busca ofertas en autos economicos, deportivos y de lujo</h1>
      <form className='formulario'>
        <>
          <label className='select-province-text' htmlFor="provincias">Seleccione una provincia</label>
          <select className='select-province' name="provincias">
            {location.map(provincias => (
              <option key={provincias} value={provincias}>{provincias}</option>
            ))}
          </select>
        </>
        <>
          {/* <label>Check In - Check Out</label> */}
          <DateRangePicker />
        </>
        <div>
          <button className='button-submit'>Buscar</button>
        </div>
      </form>
    </div>
  )
}

export default Navbar
