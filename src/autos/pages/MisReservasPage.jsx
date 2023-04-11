import React from 'react'
import Header from '../../ui/components/Header'
import Footer from '../../ui/components/Footer'
import { useNavigate } from 'react-router-dom'
import useFetchReservaId from '../../hooks/useFetchReservaId'
import ReservaCard from '../components/ReservaCard'

const MisReservasPage = () => {

    const usuarioLS = localStorage.getItem(`user`)
    const usuarioData = JSON.parse(usuarioLS)
    const {id} = usuarioData
    
    const { reserva, loading } = useFetchReservaId(id)
    
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