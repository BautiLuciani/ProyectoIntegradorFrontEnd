const getProductoCiudadFecha = async (ciudad, fechaInicial, fechaFinal) => {
    const url = `http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/producto/buscar/reserva?tituloCiudad=${ciudad}&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const productCiudadFecha = data.map(prod => ({
        id: prod.id,
        titulo: prod.titulo,
        categoria: prod.categoria,
        ciudad: prod.ciudad
    }))

    return productCiudadFecha;
}

export default getProductoCiudadFecha