import React, { useState } from 'react'
import Header from '../../ui/components/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../../ui/components/Footer'
import useFetchProvincias from '../../hooks/useFetchProvincias'
import useFetchCategorias from '../../hooks/useFetchCategorias'
import validateProduct from '../data/validateProduct'
import { useEffect } from 'react'

const AdminPage = () => {

    const [errors, setErrors] = useState({})
    const [tituloProducto, setTituloProducto] = useState("")
    const [categoria, setCategoria] = useState()
    const [ciudad, setCiudad] = useState()
    const [imagen, setImagen] = useState()
    const [descripcion, setDescripcion] = useState("")
    const [id, setId] = useState()
    const [idGenerados, setIdGenerados] = useState([])
    const [productoError, setProductoError] = useState(false)
    const { provincias } = useFetchProvincias()
    const { categorias } = useFetchCategorias()

    const generarNumero = () => {
        let nuevoId;
        do {
            nuevoId = Math.floor(Math.random() * 1000) + 1;
        } while (idGenerados?.includes(nuevoId));

        setId(nuevoId);
        setIdGenerados([...idGenerados, nuevoId]);
    };

    const onHandleSubmit = async (e) => {
        e.preventDefault()

        if (!tituloProducto || !ciudad || !categoria || !descripcion || !imagen) {
            setErrors(validateProduct(tituloProducto, ciudad, categoria, descripcion, imagen))
            return;
        }

        const request1 = await fetch('http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/producto/agregar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                tituloProducto: tituloProducto,
                tituloCiudad: ciudad,
                tituloCategoria: categoria
            })
        });

        const request2 = await fetch('http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/imagen/agregar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idProducto: id,
                titulo: `Imagen Principal ${tituloProducto}`,
                url: imagen
            })
        });

        Promise.all([request1, request2])
        .then((responses) => {
            data => console.log(data);
            navigate('/administracion/creadook')
        })
        .catch((error) => {
          setProductoError(true)
        });
    }

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Header />
            <div>
                <h3>Administracion de productos</h3>
                <button
                    onClick={onNavigateBack}
                >
                    Volver
                </button>
            </div>
            <div>
                <h3>Agregar Auto</h3>
                <div>
                    <form onSubmit={onHandleSubmit}>
                        <section>
                            <div>
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
                                    type='text'
                                    placeholder='Ingrese url de imagen'
                                    name='image'
                                    value={imagen}
                                    onChange={(e) => setImagen(e.target.value)}
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
                        <button onClick={generarNumero}>Crear Producto</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminPage