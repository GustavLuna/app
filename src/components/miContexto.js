import { createContext, useState } from "react"

export const contexto = createContext()
const { Provider } = contexto


const MiProvider = ({ children }) => {


    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    const borrarDelCarrito = (id) => {}

    const agregarAlCarrito = (producto, cantidad) => {
        if (isInCart()) {

        } else {
            const copia = carrito.slice(0)
        }
    }

    const limipiarCarrito = () => {
        setCarrito([])
    }

    const isInCart = (id) => {

    }

    const valorDelContexto = {
        total: total,
        carrito: carrito,
        borrarDelCarrito: borrarDelCarrito,
        agregarAlCarrito: agregarAlCarrito
    }

    return ( 
    <Provider value = { valorDelContexto } > { children } </ Provider>
    )
}

export default MiProvider