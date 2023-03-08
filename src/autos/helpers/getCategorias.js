const getCategorias = async()=>{
    const url = "http://ec2-3-17-71-125.us-east-2.compute.amazonaws.com:8081/categoria/listar";
    const resp = await fetch(url);
    const data = await resp.json();
    
    const categorias = data.map(cate => ({
        id: cate.id,
        titulo: cate.titulo,
        descripcion: cate.descripcion,
        imagen: cate.urlImagen
    }))

    return categorias;
}

export default getCategorias