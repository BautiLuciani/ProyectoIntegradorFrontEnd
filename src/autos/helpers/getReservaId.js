const getReservaId = async(userId)=>{
    console.log(userId);
    const url = `http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/reserva/user/${userId}`;
    const resp = await fetch(url);
    const data = await resp.json();
    
    const reservaId = data.map(res => ({
        id: res.id,
        fechaInicial: res.fechaInicial,
        fechaFinal: res.fechaFinal,
        titulo: res.producto.titulo,
        categoria: res.producto.categoria.titulo,
        ciudad: res.producto.ciudad.titulo,
        productoId: res.producto.id
    }))

    return reservaId;
}

export default getReservaId