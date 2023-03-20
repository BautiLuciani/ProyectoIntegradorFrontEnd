const getDescripcion = async()=>{
    const url = "http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/caracteristica/listar";
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