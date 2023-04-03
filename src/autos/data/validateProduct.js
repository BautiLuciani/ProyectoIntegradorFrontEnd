const validateProduct = (tituloProducto, ciudad, categoria, descripcion, imagen) => {
    const errores = {}

    if (!tituloProducto) {
        errores.nombre = "El producto debe tener un titulo"
    }
    if (!ciudad) {
        errores.ciudad = "Debe seleccionar una ciudad"
    }
    if (!categoria) {
        errores.categoria = "Debe seleccionar una categoria"
    } 
    if (!descripcion) {
        errores.descripcion = "El producto debe tener una descripcion"
    } 
    if (!imagen) {
        errores.imagen = "El producto debe tener una imagen"
    }

    return errores
}

export default validateProduct