import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { toast } from "react-toastify"

let productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100,
        categoria: 1
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200,
        categoria: 2
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300,
        categoria: 3
    }
]

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    useEffect(() => {

        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                console.log(id)
                res(productosIniciales)
            }, 3000)
        })

        promesa
            .then((respuestaDeLaApi) => {
                setProductos(productosIniciales)
            })
            .catch((errorDeLaApi) => {
                toast.error("Error al cargar los productos")

            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <>
            <h1>Bienvenidos {props.greeting}!</h1>
            <p className="container">{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer