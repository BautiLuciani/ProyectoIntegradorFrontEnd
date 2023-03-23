const validateLogin = (email, password)=> {
    const errores = {}

    if(!email){
        errores.login = "Los datos ingresados son incorrectos"
    } else if (!(email.includes('@')) || !(email.includes('.com'))){
        errores.login = "Los datos ingresados son incorrectos"
    } else if(!password){
        errores.login = "Los datos ingresados son incorrectos"
    } else if (password.length < 7) {
        errores.login = "Los datos ingresados son incorrectos"
    }

    return errores
}

export default validateLogin