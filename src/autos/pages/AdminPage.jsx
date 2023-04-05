import React, { useState } from 'react'
import Header from '../../ui/components/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../../ui/components/Footer'
import useFetchProvincias from '../../hooks/useFetchProvincias'
import useFetchCategorias from '../../hooks/useFetchCategorias'
import validateProduct from '../data/validateProduct'
import '../../styles/adminPage.css'


const AdminPage = () => {

    const [errors, setErrors] = useState({})
    const [tituloProducto, setTituloProducto] = useState("")
    const [categoria, setCategoria] = useState()
    const [ciudad, setCiudad] = useState()
    const [imagen, setImagen] = useState()
    const [descripcion, setDescripcion] = useState("")
    const [productoError, setProductoError] = useState(false)
    const { provincias } = useFetchProvincias()
    const { categorias } = useFetchCategorias()

    console.log(tituloProducto);
    console.log(categoria);
    console.log(ciudad);
    console.log(imagen);
    console.log(descripcion);



    const onHandleSubmit = async (e) => {
        e.preventDefault()

        if (!tituloProducto || !ciudad || !categoria || !descripcion || !imagen) {
            setErrors(validateProduct(tituloProducto, ciudad, categoria, descripcion, imagen))
            return;
        }

        try {
            const response = await fetch('http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/producto/agregar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: 0,
                    titulo: tituloProducto,
                    categoria: {
                        id: 0,
                        titulo: categoria,
                        descripcion: descripcion,
                        urlImagen: ""
                    },
                    ciudad: {
                        id: 0,
                        titulo: ciudad
                    }
                })
            });
            if (response.ok) {
                navegar('/administracion/creadook')
            } else if (response.status === 500) {
                setProductoError(true)
            } else {
                throw new Error('Error al crear producto');
            }
        } catch (e) {
            console.error(e)
        }
    }

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Header />
            <div className='title-admin-section'>
                <h3>Administracion de productos</h3>
                <button className='button-back-menu'
                    onClick={onNavigateBack}
                >
                    Volver
                </button>
            </div>
            <div className='form'>
                <h3>Agregar Auto</h3>
                <div>
                    <form onSubmit={onHandleSubmit}>
                        <section>
                            <div className='name-product-section'>
                                <label>Nombre del producto</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese nombre del producto'
                                    name='nombre'
                                    value={tituloProducto}
                                    onChange={(e) => setTituloProducto(e.target.value)}
                                />
                                {errors.nombre && <p className='mensajeError'>{errors.nombre}</p>}
                            </div>
                            <div>
                                <label>Imagen</label>
                                <input
                                    type='file'
                                    name='image'
                                    accept='image/*'
                                    onChange={(e) => setImagen(e.target.files[0])}
                                />
                                {errors.imagen && <p className='mensajeError'>{errors.imagen}</p>}
                            </div>
                        </section>
                        <section>
                            <div>
                                <label>Ciudad</label>
                                <select className='select-province' name="provincias" value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
                                    {provincias.map(prov => (
                                        <option key={prov.id} value={prov.titulo}>{prov.titulo}</option>
                                    ))}
                                </select>
                                {errors.ciudad && <p className='mensajeError'>{errors.ciudad}</p>}
                            </div>
                            <div>
                                <label>Categoria</label>
                                <select className='select-province' name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                    {categorias.map(cate => (
                                        <option key={cate.id} value={cate.titulo}>{cate.titulo}</option>
                                    ))}
                                </select>
                                {errors.categoria && <p className='mensajeError'>{errors.categoria}</p>}
                            </div>
                        </section>
                        <section>
                            <div>
                                <label>Descripcion</label>
                                <input
                                    type='text-area'
                                    id='descripcion'
                                    placeholder='Ingrese una descripcion'
                                    name='descripcion'
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                                {errors.descripcion && <p className='mensajeError'>{errors.descripcion}</p>}
                            </div>
                        </section>
                        {productoError && <p className='mensajeError'>No se pudo crear el producto. Por favor, vuelva a intentarlo</p>}
                        <button className='create-product-button'>Crear Producto</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminPage