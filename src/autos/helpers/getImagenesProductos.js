const getImagenesProductos = async()=>{
    const url = "http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/imagen/listar";
    const resp = await fetch(url);
    const data = await resp.json();
    
    const imagenes = data.map(img => ({
        id: img.id,
        titulo: img.titulo,
        url: img.url,
        producto: img.producto
    }))

    return imagenes;
}

export default getImagenesProductos