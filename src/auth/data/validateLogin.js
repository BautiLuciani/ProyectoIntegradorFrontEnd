const validateLogin = (values, email)=> {
    const errores = {}
    const user = JSON.parse(localStorage.getItem(`${email}`))

    if(!values.email){
        errores.login = "Los datos ingresados son incorrectos"
    } else if (!(values.email.includes('@')) || !(values.email.includes('.com'))){
        errores.login = "Los datos ingresados son incorrectos"
    } else if(!values.contrasena){
        errores.login = "Los datos ingresados son incorrectos"
    } else if (values.contrasena.length < 7) {
        errores.login = "Los datos ingresados son incorrectos"
    } else if(values.email !== user?.email){
        errores.login = "Los datos ingresados son incorrectos"
    } else if(values.contrasena !== user?.contraseña){
        errores.login = "Los datos ingresados son incorrectos"
    }

    return errores
}

export default validateLogin