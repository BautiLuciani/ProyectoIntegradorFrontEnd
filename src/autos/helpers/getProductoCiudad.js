const getProductoCiudad = async(ciudad)=>{
    const url = `http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/producto/buscar?ciudad=${ciudad}`;
    const resp = await fetch(url);
    const data = await resp.json();
    
    const productCiudad = data.map(prod => ({
        id: prod.id,
        titulo: prod.titulo,
        categoria: prod.categoria,
        ciudad: prod.ciudad
    }))

    return productCiudad;
}

export default getProductoCiudad