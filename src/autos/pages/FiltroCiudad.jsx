import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetchProductosCiudad from '../../hooks/useFetchProductoCiudad'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import AutoCard from '../components/AutoCard'
import '../../styles/FiltroCiudad.css'

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
            <section className='available-cars-section'>
                <div className='available-cars'>
                    <p>Autos disponibles en</p>
                    <h3>{ciudad}</h3>
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
                    : <div className="auto-list auto-list-filter">
                        {(provincia.length == 0)
                            ? <h3>Lo siento, no pudimos encontrar productos en esta ciudad</h3>
                            : provincia.map((prov) => (
                                <AutoCard key={prov.id} {...prov} />
                            ))}
                    </div>
            }
            <Footer />
        </>
    )
}

export default FiltroCiudad