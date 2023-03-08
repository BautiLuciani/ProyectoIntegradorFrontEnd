const getProductById = async(id)=>{
    const url = `http://ec2-3-17-71-125.us-east-2.compute.amazonaws.com:8081/producto/${id}`;
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