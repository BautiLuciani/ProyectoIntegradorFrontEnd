import React from 'react'
import { useNavigate } from 'react-router-dom'
import CalendarRangePicker from '../../ui/components/CalendarRangePicker'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import horario from '../data/horarioLlegada'
import '../../styles/ReservasPage.css'

const ReservasPage = () => {

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  return (
    <>
      <Header />
      <div className='start-booking-section'>
        <div>
          <section className='title-section'>
            <div>
              <p>CategoriaCategoria</p>
              <h3 className='title-of-product'>TituloProducto</h3>
            </div>
            <button className='button-back-menu'
              onClick={onNavigateBack}
            >
              Volver
            </button>
          </section>
        </div>
        <div>
          {/* eliminar section */}
        <section className='form-and-booking-details'> 
          {/* Completa tus datos */}
          <div className='complete-details-section'>
            <h3>Completa tus datos</h3>
            <form className='reserve-form'>
              <div className='detail-input'>
                <label>Nombre</label>
                <input type="text" />
              </div>
              <div className='detail-input'>
                <label>Apellido</label>
                <input type="text" />
              </div>
              <div className='detail-input'>
                <label>Correo Electronico</label>
                <input type="email" />
              </div>
              <div className='detail-input'>
                <label>Pais</label>
                <input type="text" />
              </div>
            </form>
          </div>
          {/* Detalle de la reserva */}
          <div className='booking-details'>
            <h3>Detalle de la reserva</h3>
            <img src="" alt="imagenProducto" />
            <div className='product-details'>
              <p className='category-of-product'>CATEGORIA_PRODUCTO</p>
              <h2>TITULO_PRODUCTO</h2>
              <p>CIUDAD_PRODUCTO</p>
              <div>
                <p>Check In</p>
                <p>VALOR_CHECKIN</p>
              </div>
              <div>
                <p>Check Out</p>
                <p>VALOR_CHECKOUT</p>
              </div>
              <button className='confirm-booking-button'>Confirmar reserva</button>
            </div>
          </div>
          </section>
          {/* Selecciona tu fecha de reserva */}
          <div className='select-schedule-section'>
            <h3>Selecciona tu fecha de reserva</h3>
            <div>
              <CalendarRangePicker />
            </div>
          </div>
          {/* Tu horario de llegada */}
          <div className='select-time'>
            <h3>Tu horario de llegada</h3>
            <p>Podes retirar el auto en cualquier momento del dia</p>
            <form>
              <label className='select-time-label'>Indicá tu horario estimado de llegada</label>
              <select>
                {horario.map(hor => (
                  <option key={hor} value={hor}>{hor}</option>
                ))}
              </select>
            </form>
          </div>
        </div>
        <div className='more-info'>
          <h3>Que tenes que saber</h3>
          <div>
            <div>
              <h4>Normas del auto</h4>
              <p>Devolver con tanque lleno</p> 
              <p>No fumar</p>
              <p>Cantidad maxima de personas segun cantidad de asientos</p>
            </div>
            <div>
              <h4>Salud y seguridad</h4>
              <p>Contar con seguro basico</p>
              <p>Menores de 12 años no pueden ir adelante</p>
              <p>Deposito de seguridad</p>
            </div>
            <div>
              <h4>Politicas de cancelacion</h4>
              <p>Agrega las fechas de tu viaje para obtener los detalles de cancelacion de este auto</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ReservasPage