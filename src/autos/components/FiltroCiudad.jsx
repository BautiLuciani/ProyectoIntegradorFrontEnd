import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetchProductosCiudad from '../../hooks/useFetchProductoCiudad'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import AutoCard from './AutoCard'

const FiltroCiudad = () => {

    const location = useLocation()
    const ciudad = location.state

    const { provincia, charging } = useFetchProductosCiudad(ciudad)

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }


    return (
        <>
            <Header />
            {
                charging && (<h2>Cargando...</h2>)
            }
            <section>
                <div>
                    <p>Autos disponibles en</p>
                    <h3>{ciudad}</h3>
                </div>
                <button
                    onClick={onNavigateBack}
                >
                    Volver
                </button>
            </section>
            <div className="auto-list">
                {provincia.map((prov) => (
                    <AutoCard key={prov.id} {...prov} />
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default FiltroCiudad