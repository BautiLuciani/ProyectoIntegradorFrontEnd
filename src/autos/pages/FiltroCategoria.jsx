import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetchProductos from '../../hooks/useFetchProductos'
import Footer from '../../ui/components/Footer'
import Header from '../../ui/components/Header'
import AutoCard from '../components/AutoCard'
import '../../styles/FiltroCategoria.css'

const FiltroCategoria = () => {

    const location = useLocation()
    const categoria = location.state

    const { productos, cargando } = useFetchProductos()

    const categorias = productos.filter(prod => (prod.categoria.titulo == categoria))

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Header />
            <section>
                <div className='category'>
                    <p>Categoria</p>
                    <h3>{categoria}</h3>
                </div>
                <button className='button-back'
                    onClick={onNavigateBack}
                >
                    Volver
                </button>
            </section>
            {
                cargando && (<h2>Cargando...</h2>)
            }
            <div className="auto-list auto-list-filter">
                {categorias.map((cate) => (
                    <AutoCard key={cate.id} {...cate} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default FiltroCategoria