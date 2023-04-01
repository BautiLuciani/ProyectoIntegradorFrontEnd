import React, { useEffect, useState } from 'react'
import { useJwt } from 'react-jwt'
import { useNavigate, useParams } from 'react-router-dom'
import useFetchImagenes from '../../hooks/useFetchImagenes'
import useFetchProductosId from '../../hooks/useFetchProductosId'
import CalendarRangePicker from '../../ui/components/CalendarRangePicker'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import horario from '../data/horarioLlegada'

const ReservasPage = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const { loading, products } = useFetchProductosId(id)
  const { imagenes } = useFetchImagenes()
  const [calendarRange, setCalendarRange] = useState([null, null]);
  const [errorApi, setErrorApi] = useState(false)

  const checkInDate = calendarRange[0]?.getDate()
  const checkInMonth = calendarRange[0]?.getMonth()
  const checkInYear = calendarRange[0]?.getFullYear()
  const checkIn = `${checkInYear}-0${checkInMonth}-${checkInDate}`
  const checkInNew = new Date(checkIn)
  
  const checkOutDate = calendarRange[1]?.getDate()
  const checkOutMonth = calendarRange[1]?.getMonth()
  const checkOutYear = calendarRange[1]?.getFullYear()
  const checkOut = `${checkOutYear}-0${checkOutMonth}-${checkOutDate}`
  const checkOutNew = new Date(checkOut)
  
  const cookie = document.cookie
  .split('; ')
  .find(row => row.startsWith('jwt='))
  ?.split('=')[1];

  const { decodedToken } = useJwt(cookie);
  const usuario = JSON.stringify(decodedToken)
  const user = JSON.parse(usuario)

  const onNavigateBack = () => {
    navigate(-1)
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setTime(horaActualString)
    const role = user?.authorities[0]?.authority
    
    if(role == 'ROLE_USER') {
      fetch('http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/reserva/agregar', {
      method: 'POST',
      body: JSON.stringify({
          fechaInicial: checkInNew.toISOString(),
          fechaFinal: checkOutNew.toISOString(),
          titulo: products.titulo,
          email: user?.sub
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => navigate('/producto/reservaok'))
    .catch(error => setErrorApi(true));
    } else {
      setErrorApi(true)
    }
  }
  

  return (
    <>
      <Header />
      {
        loading && (<h2>Cargando...</h2>)
      }
      <div>
        <section>
          <div>
            <p>{products.categoria?.titulo}</p>
            <h3>{products.titulo}</h3>
          </div>
          <button
            onClick={onNavigateBack}
          >
            Volver
          </button>
        </section>
      </div>
      <form onSubmit={onHandleSubmit}>
        <div>
          {/* Completa tus datos */}
          <div>
            <h3>Completa tus datos</h3>
            <div>
              <label>Nombre</label>
              <input type="text" value={user?.sub} disabled/>
            </div>
            <div>
              <label>Apellido</label>
              <input type="text" value={user?.sub} disabled/>
            </div>
            <div>
              <label>Correo Electronico</label>
              <input type="email" value={user?.sub} disabled/>
            </div>
            <div>
              <label>Pais</label>
              <input type="text" value="Argentina" disabled/>
            </div>
          </div>
          {/* Detalle de la reserva */}
          <div>
            <h3>Detalle de la reserva</h3>
            {
              imagenes.map(img => {
                if ((img.producto.id == id) && (img.titulo.includes("Imagen Principal"))) {
                  return <img key={img.id} src={img.url} alt={img.titulo} />
                }
              })
            }
            <div>
              <p>{products.categoria?.titulo}</p>
              <h2>{products.titulo}</h2>
              <p>{products.ciudad?.titulo}</p>
              {
                (checkIn.includes("undefined") || checkOut.includes("undefined"))
                  ? <>
                    <div>
                      <p>Check In</p>
                      <p>--</p>
                    </div>
                    <div>
                      <p>Check Out</p>
                      <p>--</p>
                    </div>
                  </>
                  : <>
                    <div>
                      <p>Check In</p>
                      <p>{checkIn}</p>
                    </div>
                    <div>
                      <p>Check Out</p>
                      <p>{checkOut}</p>
                    </div>
                  </>
              }
              <button>Confirmar reserva</button>
              <p>{(errorApi) && "Lamentablemente la reserva no ha podido realizarse. Por favor, vuelva a intentarlo."}</p>
            </div>
          </div>
          {/* Selecciona tu fecha de reserva */}
          <div>
            <h3>Selecciona tu fecha de reserva</h3>
            <div>
              <CalendarRangePicker calendarRange={calendarRange} setCalendarRange={setCalendarRange} />
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
      </form>
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
      <Footer />
    </>
  )
}

export default ReservasPage