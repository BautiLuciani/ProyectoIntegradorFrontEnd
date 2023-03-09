import React, { useState } from 'react'
import '../../styles/Navbar.css'
import DateRangePicker from './DateRangePicker'
import useFetchProvincias from '../../hooks/useFetchProvincias'


const Navbar = () => {

  const { provincias } = useFetchProvincias()

  return (
    <div className='navbar'>
      <h1>Busca ofertas en autos economicos, deportivos y de lujo</h1>
      <form className='formulario'>
        <>
          <label className='select-province-text' htmlFor="provincias">Seleccione una provincia</label>
          <select className='select-province' name="provincias">
            {provincias.map(prov => (
              <option key={prov.id} value={prov.titulo}>{prov.titulo}</option>
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
