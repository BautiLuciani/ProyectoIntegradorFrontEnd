const getProvincias = async()=>{
    const url = "http://ec2-3-144-85-4.us-east-2.compute.amazonaws.com:8084/ciudad/listar";
    const resp = await fetch(url);
    const data = await resp.json();
    
    const provincias = data.map(prov => ({
        id: prov.id,
        titulo: prov.titulo,
    }))

    return provincias;
}

export default getProvincias