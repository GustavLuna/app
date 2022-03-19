import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

let productosIniciales = {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    }

   const ItemDetailContainer = (props) => {

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

            <h1>Bienvenidos {props.greeting}!</h1>
            <p className="container">{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <section className='producto'>
   
            {productos.map((producto) => {
                return <ItemDetail key={producto.id} producto={producto} />
            })}
            </section>
        </>
    )
}

export default ItemDetailContainer;