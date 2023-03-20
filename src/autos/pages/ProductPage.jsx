import React, { useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../../ui/components/Header'
import { GoLocation } from 'react-icons/go'
import { BsSnow, BsThermometerSun, BsFillPersonCheckFill } from 'react-icons/bs'
import { GiSteeringWheel } from 'react-icons/gi'
import { MdOutlineFlipCameraAndroid, MdTouchApp } from 'react-icons/md'
import { TbGps } from 'react-icons/tb'
import Footer from '../../ui/components/Footer'
import '../../styles/ProductPage.css'
import CalendarRangePicker from '../../ui/components/CalendarRangePicker'
import useFetchProductosId from '../../hooks/useFetchProductosId'
import Carrusel from '../components/Carrusel'
import useFetchImagenes from '../../hooks/useFetchImagenes'
import useFetchDescripcion from '../../hooks/useFetchDescripcion'

const ProductPage = () => {

    const { id } = useParams()
    const { products, loading } = useFetchProductosId(id)
    const { imagenes } = useFetchImagenes()
    const { descripcion } = useFetchDescripcion()

    const galeria = imagenes.filter(img => (img.producto.id == id))
    console.log(galeria);

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Header />
            {
                loading && (<h2>Cargando...</h2>)
            }
            <div>
                <section className='title-info'>
                    <div>
                        <p>{`Auto ${products.categoria?.titulo}`}</p>
                        <h3>{products.titulo}</h3>
                    </div>
                    <button className='return-button'
                        onClick={onNavigateBack}
                    >
                        Volver
                    </button>
                </section>
                <section className='location-info'>
                    <div className='location'>
                        <GoLocation className='location-icon' />
                        <p><b>{products.ciudad?.titulo}</b>, Argentina</p>
                    </div>
                    <p className='distance'>A 940 metros del centro</p>
                </section>
                <section className='img-auto'>
                    <div className='images-group'>
                        <img className='image' src={galeria[0]?.url} alt={products.titulo} />
                        <img src={galeria[1]?.url} alt={products.titulo} />
                        <img src={galeria[2]?.url} alt={products.titulo} />
                        <img src={galeria[3]?.url} alt={products.titulo} />
                        <img src={galeria[4]?.url} alt={products.titulo} />
                    </div>
                    <Carrusel imagenes={galeria} />
                </section>
                <section className='description'>
                    <h3>Disfruta de tu viaje</h3>
                    {
                        descripcion.map(desc => {
                            if (desc.id == id) {
                                return <p key={desc.id}>{desc.descripcion}</p>
                            }
                        })
                    }
                </section>

                <section className='details-section'>
                    <h3 className='details-title'>¿Que ofrece este auto?</h3>
                    <hr />
                    <div className='details'>
                        <div>
                            <BsSnow className='icon' />
                            <p>Aire acondicionado</p>
                        </div>
                        <div>
                            <BsThermometerSun className='icon' />
                            <p>Calentador de asiento</p>
                        </div>
                        <div>
                            <GiSteeringWheel className='icon' />
                            <p>Piloto automatico</p>
                        </div>
                        <div>
                            <MdOutlineFlipCameraAndroid className='icon' />
                            <p>Camara retrovisora</p>
                        </div>
                        <div>
                            <BsFillPersonCheckFill className='icon' />
                            <p>Asistente</p>
                        </div>
                        <div>
                            <MdTouchApp className='icon' />
                            <p>Pantalla tactil</p>
                        </div>
                        <div>
                            <TbGps className='icon' />
                            <p>GPS</p>
                        </div>
                    </div>
                </section >
                <section className='rules-and-recommendations'>
                    <h3 className='rules-and-recommendations-title'>Qué tenés que saber</h3>
                    <hr />
                    <div className='sections'>
                        <div className='section-info'>
                            <h4 className='section-title'>Normas del auto</h4>
                            <p>Devolver con tanque lleno</p>
                            <p>No fumar</p>
                            <p>Cantidad maxima de personas segun cantidad de asientos</p>
                        </div>
                        <div>
                            <h4 className='section-title'>Salud y seguridad</h4>
                            <p>Contar con seguro basico</p>
                            <p>Menores de 12 años no pueden ir adelante</p>
                            <p>Deposito de seguridad</p>
                        </div>
                        <div>
                            <h4 className='section-title'>Politicas de cancelacion</h4>
                            <p>Agrega las fechas de tu viaje para obtener los detalles de cancelacion de este auto</p>
                        </div>
                    </div>
                </section>
                <section className='bookings-zone'>
                    <h3 className='bookings-zone-title'>Fechas disponibles</h3>
                    <div className='calendary-and-booking'>
                        <div className='calendary'>
                            <CalendarRangePicker />
                        </div>
                        <div className='starting-reservation'>
                            <p className='reservation-mensagge'>Agrega tus fechas de viaje para obtener precios exactos</p>
                            <Link className='booking-button'
                                to={`/producto/${id}/reserva`}
                            >
                                Iniciar Reserva
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default ProductPage