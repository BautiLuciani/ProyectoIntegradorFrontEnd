const validate = (values, email) => {
    const errores = {}
    const user = JSON.parse(localStorage.getItem(`${email}`))

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
    if (!values.password) {
        errores.password = "Contraseña no puede estar vacio"
    } else if (!(values.contrasenia == values.password)) {
        errores.password = "Las contraseñas deben coincidir"
    }
    if(email === user?.email){
        errores.ingresar = "Este correo ya esta utilizado"
    }

    return errores
}

export default validate