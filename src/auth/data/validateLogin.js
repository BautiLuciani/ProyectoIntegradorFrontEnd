const validateLogin = (email, password)=> {
    const errores = {}

    if(!email){
        errores.login = "Los campos no pueden estar vacios"
    } else if(!password){
        errores.login = "Los campos no pueden estar vacios"
    }

    return errores
}

export default validateLogin