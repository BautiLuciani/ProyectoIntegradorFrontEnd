import React from 'react'
import useFetchImagenes from '../../hooks/useFetchImagenes'

const ReservaCard = ({ id, fechaInicial, fechaFinal, titulo, categoria, ciudad, productoId }) => {

    const { imagenes } = useFetchImagenes()
    console.log(imagenes);

    return (
        <div className="auto-card">
            <div>
                {
                    imagenes.map(img => {
                        if ((img.producto.id == productoId) && (img.titulo?.includes("Imagen Principal"))) {
                            return <img key={img.id} src={img.url} alt={img.titulo} />
                        }
                    })
                }
            </div>
            <div className="info-car">
                <h4 className="info-title">{titulo}</h4>
                <h6 className="info-category">{categoria}</h6>
                <p className="info-location">{ciudad}</p>
                <p>CheckIn: {fechaInicial}</p>
                <p>CheckOut: {fechaFinal}</p>
            </div>
        </div>
    )
}

export default ReservaCard