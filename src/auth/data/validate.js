const validate = (firstName, lastName, email, password, passwordDbl) => {
    const errores = {}

    if (!firstName) {
        errores.nombre = "Nombre no puede estar vacio"
    }
    if (!lastName) {
        errores.apellido = "Apellido no puede estar vacio"
    }
    if (!email) {
        errores.email = "Email no puede estar vacio"
    } else if (!(email.includes('@')) || !(email.includes('.com'))){
        errores.email = "El email no es valido"
    }
    if (!password || !passwordDbl) {
        errores.contrasenia = "Contraseña no puede estar vacio"
    } else if (password.length < 7) {
        errores.contrasenia = "La contraseña es muy corta"
    } else if(password !== passwordDbl) {
        errores.passwordDbl = "Las contraseñas deben coincidir"
    }

    return errores
}

export default validate