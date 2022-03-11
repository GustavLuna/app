import { useState, useEffect } from "react"
import ItemList from "./ItemList";

let productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300
    }
]

const ItemListContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(() => {

        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 3000)
        })

        promesa
            .then((respuestaDeLaApi) => {
                setProductos(productosIniciales)
            })
            .catch((errorDeLaApi) => {
                console.log(errorDeLaApi)

            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h1>Bienvenidos  a mi tienda!</h1>
            <p className="container">{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer