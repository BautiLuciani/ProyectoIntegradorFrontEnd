const getImagenesProductos = async()=>{
    const url = "http://ec2-3-144-85-4.us-east-2.compute.amazonaws.com:8084/imagen/listar";
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