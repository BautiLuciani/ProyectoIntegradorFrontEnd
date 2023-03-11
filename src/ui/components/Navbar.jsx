import React, { useState } from 'react'
import '../../styles/Navbar.css'
import DateRangePicker from './DateRangePicker'
import useFetchProvincias from '../../hooks/useFetchProvincias'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const {provincias} = useFetchProvincias()
  const [ciudad, setCiudad] = useState("")

  const onCiudadChange = (e)=>{
    setCiudad(e.target.value)
  }

  const onHandleSubmit = (e)=>{
    e.preventDefault()
  }

  console.log(ciudad);

  return (
    <div className='navbar'>
      <h1>Busca ofertas en autos economicos, deportivos y de lujo</h1>
      <form className='formulario' onSubmit={onHandleSubmit}>
        <>
          <label className='select-province-text' htmlFor="provincias">Seleccione una provincia</label>
          <select  className='select-province' name="provincias" value={ciudad} onChange={onCiudadChange}>
            {provincias.map(prov => (
              <option key={prov.id} value={prov.titulo}>{prov.titulo}</option>
            ))}
          </select>
        </>
        <>
          <label>Check In - Check Out</label>
          <DateRangePicker/>
        </>
        <Link
          to={"producto/ciudad"}
          state={ciudad}
          className='button-submit'
        >
          Buscar
        </Link>
      </form>
    </div>
  )
}

export default Navbar
