const getProvincias = async()=>{
    const url = "http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/ciudad/listar";
    const resp = await fetch(url);
    const data = await resp.json();
    
    const provincias = data.map(prov => ({
        id: prov.id,
        titulo: prov.titulo,
    }))

    return provincias;
}

export default getProvincias