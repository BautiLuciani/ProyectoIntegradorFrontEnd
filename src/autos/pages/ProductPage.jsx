import React, { useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../../ui/components/Header'
import { GoLocation } from 'react-icons/go'
import { BsSnow, BsThermometerSun, BsFillPersonCheckFill } from 'react-icons/bs'
import { GiSteeringWheel } from 'react-icons/gi'
import { MdOutlineFlipCameraAndroid, MdTouchApp } from 'react-icons/md'
import { TbGps } from 'react-icons/tb'
import Footer from '../../ui/components/Footer'
import useFetchProductosId from '../../hooks/useFetchProductosId'
import Carrusel from '../components/Carrusel'
import useFetchImagenes from '../../hooks/useFetchImagenes'
import useFetchDescripcion from '../../hooks/useFetchDescripcion'
import { useState } from 'react'
import Cookies from 'js-cookie'
import CalendarPicker from '../../ui/components/CalendarPicker'
import { useEffect } from 'react'

const ProductPage = () => {

    const [reservas, setReservas] = useState([])
    const { id } = useParams()
    const { products, loading } = useFetchProductosId(id)
    const { imagenes } = useFetchImagenes()
    const { descripcion } = useFetchDescripcion()

    const galeria = imagenes.filter(img => (img.producto.id == id))

    useEffect(() => {
        fetch(`http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/producto/${id}/reservas`)
            .then(response => response.json())
            .then(data => setReservas(data))
            .catch(error => console.error(error))
    }, [id])

    const navigate = useNavigate()

    const onReserva = () => {
        const token = Cookies.get('jwt')
        if (!token) {
            alert("Para hacer una reserva debe inicar sesion")
            navigate(`/login`)
        } else {
            navigate(`/producto/${id}/reserva`)
        }
    }

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
                <section>
                    <div>
                        <p>{`Auto ${products.categoria?.titulo}`}</p>
                        <h3>{products.titulo}</h3>
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
                        <p><b>{products.ciudad?.titulo}</b>, Argentina</p>
                    </div>
                    <p>A 940 metros del centro</p>
                </section>
                <section>
                    <div>
                        <img src={galeria[0]?.url} alt={products.titulo} />
                        <img src={galeria[1]?.url} alt={products.titulo} />
                        <img src={galeria[2]?.url} alt={products.titulo} />
                        <img src={galeria[3]?.url} alt={products.titulo} />
                        <img src={galeria[4]?.url} alt={products.titulo} />
                    </div>
                    <Carrusel imagenes={galeria} />
                </section>
                <section>
                    <h3>Disfruta de tu viaje</h3>
                    {
                        descripcion.map(desc => {
                            if (desc.id == id) {
                                return <p key={desc.id}>{desc.descripcion}</p>
                            }
                        })
                    }
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
                            <CalendarPicker reservas={reservas}/>
                        </div>
                        <div>
                            <p>Agrega tus fechas de viaje para obtener precios exactos</p>
                            <button onClick={onReserva}> Iniciar Reserva </button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default ProductPage