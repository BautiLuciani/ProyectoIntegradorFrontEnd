import autos from "../data/autos";

const getAutoById = (id)=> {
    return autos.find(auto => auto.id === id) 
}

export default getAutoById;