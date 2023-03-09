const getProductById = async(id)=>{
    const url = `http://ec2-3-144-85-4.us-east-2.compute.amazonaws.com:8084/producto/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
    
    const productId = ({
        id: data.id,
        titulo: data.titulo,
        categoria: data.categoria,
        ciudad: data.ciudad
    })

    return productId;
}

export default getProductById