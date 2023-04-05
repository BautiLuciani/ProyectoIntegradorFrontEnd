import { createContext, useContext, useState } from "react";


export const ContextGlobal = createContext()

export const ContextProvider = ({ children })=> {
    const [userReserva, setUserReserva] = useState(false)
    const [idProducto, setIdProducto] = useState("")

    return (
        <ContextGlobal.Provider
            value={{userReserva, idProducto, setUserReserva, setIdProducto}}
        >
            {children}
        </ContextGlobal.Provider>
    )
}

export const useContextGlobal = ()=> {
    return useContext(ContextGlobal)
}