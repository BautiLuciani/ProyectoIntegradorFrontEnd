import React, { useState } from 'react'
import '../../styles/Navbar.css'
import DateRangePicker from './DateRangePicker'
import useFetchProvincias from '../../hooks/useFetchProvincias'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const { provincias } = useFetchProvincias()
  const [ciudad, setCiudad] = useState("")
  const [dateRange, setDateRange] = useState([null, null]);

  const checkInDate = dateRange[0]?.getDate()
  const checkInMonth = (dateRange[0]?.getMonth()) + 1
  const checkInYear = dateRange[0]?.getFullYear()
  const checkIn = `${checkInYear}-${(checkInMonth?.toString().length == 1)?'0'+checkInMonth:checkInMonth}-${(checkInDate?.toString().length == 1)?'0'+checkInDate:checkInDate}`
  
  const checkOutDate = dateRange[1]?.getDate()
  const checkOutMonth = (dateRange[1]?.getMonth()) + 1
  const checkOutYear = dateRange[1]?.getFullYear()
  const checkOut = `${checkOutYear}-${(checkOutMonth?.toString().length == 1)?'0'+checkOutMonth:checkOutMonth}-${(checkOutDate?.toString().length == 1)?'0'+checkOutDate:checkOutDate}`

  const onCiudadChange = (e) => {
    setCiudad(e.target.value)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='navbar'>
      <h1>Busca ofertas en autos economicos, deportivos y de lujo</h1>
      <form className='formulario' onSubmit={onHandleSubmit}>
        <>
          <label className='select-province-text' htmlFor="provincias">Seleccione una provincia</label>
          <select className='select-province' name="provincias" value={ciudad} onChange={onCiudadChange}>
            {provincias.map(prov => (
              <option key={prov.id} value={prov.titulo}>{prov.titulo}</option>
            ))}
          </select>
        </>
        <>
          <label>Check In - Check Out</label>
          <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
        </>
        {
          (dateRange[0] === null && dateRange[1] === null)
            ? <Link
              to={"producto/ciudad"}
              state={ciudad}
              className='button-submit'
            >
              Buscar
            </Link>
            : <Link
              to={"producto/ciudadFecha"}
              state={{ciudad, checkIn, checkOut}}
              className='button-submit'
            >
              Buscar
            </Link>
        }
      </form>
    </div>
  )
}

export default Navbar
