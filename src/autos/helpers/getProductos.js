const getProductos = async()=>{
    const url = "http://ec2-3-144-85-4.us-east-2.compute.amazonaws.com:8084/producto/listar";
    const resp = await fetch(url);
    const data = await resp.json();
    
    const productos = data.map(prod => ({
        id: prod.id,
        titulo: prod.titulo,
        categoria: prod.categoria,
        ciudad: prod.ciudad
    }))

    return productos;
}

export default getProductos