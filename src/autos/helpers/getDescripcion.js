const getDescripcion = async()=>{
    const url = "http://ec2-3-144-85-4.us-east-2.compute.amazonaws.com:8084/caracteristica/listar";
    const resp = await fetch(url);
    const data = await resp.json();
    
    const descripcion = data.map(desc => ({
        id: desc.id,
        descripcion: desc.descripcion,
        productos: desc.productos
    }))

    return descripcion;
}

export default getDescripcion