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
                <section>
                    <div>
                        <p>{`Auto ${auto.category}`}</p>
                        <h3>{auto.title}</h3>
                    </div>
                    <button
                        onClick={onNavigateBack}
                    >
                        Volver
                    </button>
                </section>
                <section>
                    <div>
                        <GoLocation />
                        <p><b>{auto.location}</b>, Argentina</p>
                    </div>
                    <p>A 940 metros del centro</p>
                </section>
                <section>
                    <div>
                        <img src={auto.img} alt={auto.title} />
                        <img src={auto.img} alt={auto.title} />
                        <img src={auto.img} alt={auto.title} />
                        <img src={auto.img} alt={auto.title} />
                        <img src={auto.img} alt={auto.title} />
                    </div>
                    <button> Ver Mas </button>
                </section>
                <section>
                    <h3>Disfruta de tu viaje</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam quasi impedit sit voluptas a. Ipsa vitae facilis, accusantium consequatur quisquam doloribus, nostrum ab minus mollitia libero nulla voluptas sint!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rem atque recusandae illum porro perferendis voluptas quisquam aspernatur accusamus omnis? Quod ab unde eius ut ipsa eligendi magni, dolores nobis!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nemo odio vel rem voluptatem animi error est sint ullam ipsum laudantium, quia, ratione culpa impedit. Temporibus praesentium dolorem sit ipsam?</p>
                </section>
                <section>
                    <h3>¿Que ofrece este auto?</h3>
                    <div>
                        <div>
                            <BsSnow />
                            <p>Aire acondicionado</p>
                        </div>
                        <div>
                            <BsThermometerSun />
                            <p>Calentador de asiento</p>
                        </div>
                        <div>
                            <GiSteeringWheel />
                            <p>Piloto automatico</p>
                        </div>
                        <div>
                            <MdOutlineFlipCameraAndroid />
                            <p>Camara retrovisora</p>
                        </div>
                        <div>
                            <BsFillPersonCheckFill />
                            <p>Asistente</p>
                        </div>
                        <div>
                            <MdTouchApp />
                            <p>Pantalla tactil</p>
                        </div>
                        <div>
                            <TbGps />
                            <p>GPS</p>
                        </div>
                    </div>
                </section>
                <section>
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
                </section>
                <section>
                    <h3>Fechas disponibles</h3>
                    <div>
                        <div>
                            <CalendarRangePicker/>
                        </div>
                        <div>
                            <p>Agrega tus fechas de viaje para obtener precios exactos</p>
                            <button>
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