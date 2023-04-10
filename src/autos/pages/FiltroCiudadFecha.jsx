import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../../ui/components/Header'
import Footer from '../../ui/components/Footer'
import useFetchProductosCiudadFecha from '../../hooks/useFetchProductoCiudadFecha'
import AutoCard from '../components/AutoCard'
import useFetchProductosCiudad from '../../hooks/useFetchProductoCiudad'

const FiltroCiudadFecha = () => {

    const location = useLocation()
    const {ciudad, checkIn, checkOut} = location.state

    const { provincia } = useFetchProductosCiudad(ciudad)
    const {product, charging} = useFetchProductosCiudadFecha(ciudad, checkIn, checkOut)

    const productos = provincia.filter(prod => !product.find(produ => produ.id === prod.id))

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Header />
            <section>
                <div>
                    <p>Autos disponibles en</p>
                    <h3>{ciudad}</h3>
                    <h3>{checkIn} - {checkOut}</h3>
                </div>
                <button
                    onClick={onNavigateBack}
                >
                    Volver
                </button>
            </section>
            {
                (charging)
                    ? (<h2>Cargando...</h2>)
                    : <div className="auto-list">
                        {(productos.length == 0)
                            ? <h3>Lo siento, no pudimos encontrar productos en esta ciudad y fecha</h3>
                            : productos.map((prod) => (
                                <AutoCard key={prod.id} {...prod} />
                            ))}
                    </div>
            }
            <Footer />
        </>
    )
}

export default FiltroCiudadFecha