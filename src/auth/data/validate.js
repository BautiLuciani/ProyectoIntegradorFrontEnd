const validate = (values) => {
    const errores = {}

    if (!values.nombre) {
        errores.nombre = "Nombre no puede estar vacio"
    }
    if (!values.apellido) {
        errores.apellido = "Apellido no puede estar vacio"
    }
    if (!values.email) {
        errores.email = "Email no puede estar vacio"
    } else if (!(values.email.includes('@')) || !(values.email.includes('.com'))){
        errores.email = "El email no es valido"
    }
    if (!values.contrasenia) {
        errores.contrasenia = "Contraseña no puede estar vacio"
    } else if (values.contrasenia.length < 7) {
        errores.contrasenia = "La contraseña es muy corta"
    }
    if (!values.contrasena) {
        errores.contrasena = "Contraseña no puede estar vacio"
    } else if (values.contrasena.length < 7) {
        errores.contrasena = "La contraseña es muy corta"
    }
    if (!values.password) {
        errores.password = "Contraseña no puede estar vacio"
    } else if (!(values.contrasenia == values.password)) {
        errores.password = "Las contraseñas deben coincidir"
    }

    return errores
}

export default validate