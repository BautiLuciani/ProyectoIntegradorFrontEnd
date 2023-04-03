const getUsuarios = async()=>{
    const url = "http://ec2-3-133-79-117.us-east-2.compute.amazonaws.com:8085/users/listar";
    const resp = await fetch(url);
    const data = await resp.json();
    
    const usuarios = data.map(usu => ({
        id: usu.id,
        first_name: usu.first_name,
        last_name: usu.last_name,
        email: usu.email,
        password: usu.password,
        roles: usu.roles
    }))

    return usuarios;
}

export default getUsuarios