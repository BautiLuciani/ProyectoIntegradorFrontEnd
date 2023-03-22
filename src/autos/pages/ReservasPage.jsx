import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CalendarRangePicker from '../../ui/components/CalendarRangePicker'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import horario from '../data/horarioLlegada'

const ReservasPage = () => {

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  return (
    <>
      <Header />
      <div>
        <section>
          <div>
            <p>CategoriaCategoria</p>
            <h3>TituloProducto</h3>
          </div>
          <button
            onClick={onNavigateBack}
          >
            Volver
          </button>
        </section>
      </div>
      <div>
        {/* Completa tus datos */}
        <div>
          <h3>Completa tus datos</h3>
          <form>
            <div>
              <label>Nombre</label>
              <input type="text" />
            </div>
            <div>
              <label>Apellido</label>
              <input type="text" />
            </div>
            <div>
              <label>Correo Electronico</label>
              <input type="email" />
            </div>
            <div>
              <label>Pais</label>
              <input type="text" />
            </div>
          </form>
        </div>
        {/* Detalle de la reserva */}
        <div>
          <h3>Detalle de la reserva</h3>
          <img src="" alt="imagenProducto" />
          <div>
            <p>CATEGORIA_PRODUCTO</p>
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
            <Link to={`/producto/reservaok`}>
              Confirmar reserva
            </Link>
          </div>
        </div>
        {/* Selecciona tu fecha de reserva */}
        <div>
          <h3>Selecciona tu fecha de reserva</h3>
          <div>
            <CalendarRangePicker />
          </div>
        </div>
        {/* Tu horario de llegada */}
        <div>
          <h3>Tu horario de llegada</h3>
          <p>Podes retirar el auto en cualquier momento del dia</p>
          <div>
            <p>Indicá tu horario estimado de llegada</p>
            <select>
              {horario.map(hor => (
                <option key={hor} value={hor}>{hor}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div>
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
      <Footer/>
    </>
  )
}

export default ReservasPage