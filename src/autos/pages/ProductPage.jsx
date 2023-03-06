import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../ui/components/Header'
import getAutoById from '../helpers/getAutoById'
import { GoLocation } from 'react-icons/go'
import { BsSnow, BsThermometerSun, BsFillPersonCheckFill } from 'react-icons/bs'
import { GiSteeringWheel } from 'react-icons/gi'
import { MdOutlineFlipCameraAndroid, MdTouchApp } from 'react-icons/md'
import { TbGps } from 'react-icons/tb'
import Footer from '../../ui/components/Footer'
import '../../styles/ProductPage.css'
import CalendarRangePicker from '../../ui/components/CalendarRangePicker'

const ProductPage = () => {

    const { id } = useParams()
    const auto = useMemo(() => getAutoById(id), [id])

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Header />
            <div>
                <section className='title-info'>
                    <div>
                        <p>{`Auto ${auto.category}`}</p>
                        <h3 className='auto-title'>{auto.title}</h3>
                    </div>
                    <button className='return-button'
                        onClick={onNavigateBack}
                    >
                        Volver
                    </button>
                </section>
                <section className='location-info'>
                    <div className='location'>
                        <GoLocation className='location-icon'/>
                        <p><b>{auto.location}</b>, Argentina</p>
                    </div>
                    <p className='distance'>A 940 metros del centro</p>
                </section>
                <section className='img-auto'>
                    <div className='images-group'>
                        <img className='image' src={auto.img} alt={auto.title} />
                        <img src={auto.img} alt={auto.title} />
                        <img src={auto.img} alt={auto.title} />
                        <img src={auto.img} alt={auto.title} />
                        <img src={auto.img} alt={auto.title} />
                    </div>
                    <button className='view-more-button'> Ver Mas </button>
                </section>
                <section className='description'>
                    <h3 className='description-message'>Disfruta de tu viaje</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam quasi impedit sit voluptas a. Ipsa vitae facilis, accusantium consequatur quisquam doloribus, nostrum ab minus mollitia libero nulla voluptas sint!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rem atque recusandae illum porro perferendis voluptas quisquam aspernatur accusamus omnis? Quod ab unde eius ut ipsa eligendi magni, dolores nobis!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nemo odio vel rem voluptatem animi error est sint ullam ipsum laudantium, quia, ratione culpa impedit. Temporibus praesentium dolorem sit ipsam?</p>
                </section>

                <section className='details-section'>
                    <h3 className='details-title'>¿Que ofrece este auto?</h3>
                    <hr/>
                    <div className='details'>
                        <div>
                            <BsSnow className='icon'/>
                            <p>Aire acondicionado</p>
                        </div>
                        <div>
                            <BsThermometerSun className='icon'/>
                            <p>Calentador de asiento</p>
                        </div>
                        <div>
                            <GiSteeringWheel className='icon'/>
                            <p>Piloto automatico</p>
                        </div>
                        <div>
                            <MdOutlineFlipCameraAndroid className='icon'/>
                            <p>Camara retrovisora</p>
                        </div>
                        <div>
                            <BsFillPersonCheckFill className='icon'/>
                            <p>Asistente</p>
                        </div>
                        <div>
                            <MdTouchApp className='icon'/>
                            <p>Pantalla tactil</p>
                        </div>
                        <div>
                            <TbGps className='icon'/>
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
                            <CalendarRangePicker/>
                        </div>
                        <div className='starting-reservation'>
                            <p className='reservation-mensagge'>Agrega tus fechas de viaje para obtener precios exactos</p>
                            <button className='booking-button'>
                                Iniciar Reserva
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default ProductPage