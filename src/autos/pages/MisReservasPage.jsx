import React, { useEffect } from 'react'
import Header from '../../ui/components/Header'
import Footer from '../../ui/components/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetchUsuarios from '../../hooks/useFetchUsuarios'
import { useJwt } from 'react-jwt'
import useFetchReservaId from '../../hooks/useFetchReservaId'
import ReservaCard from '../components/ReservaCard'

const MisReservasPage = () => {

    const location = useLocation()
    const {nombre, apellido} = location.state 

    const {usuarios} = useFetchUsuarios()
    const id = usuarios.filter(usu => usu.first_name == nombre && usu.last_name == apellido)
    
    const { reserva, loading } = useFetchReservaId(106)
    console.log(reserva);
    
    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Header />
            <section>
                <div>
                    <p>Mis Reservas</p>
                </div>
                <button
                    onClick={onNavigateBack}
                >
                    Volver
                </button>
            </section>
            {
                (loading)
                ? (<h2>Cargando...</h2>)
                : <div className="auto-list">
                        {(reserva.length === 0)
                            ? <h3>Usted no ha realizado ninguna reserva aun</h3>
                            : reserva.map((res) => (
                                <ReservaCard key={res.id} {...res} />
                            ))}
                    </div>
            }
            <Footer />
        </>
    )
}

export default MisReservasPage