import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { Link, useParams } from "react-router-dom"

let productosIniciales = {
    id: 1,
    nombre: "Producto 1",
    precio: 100
}

const ItemDetailContainer = (props) => {

    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)
    const [seleccionado, setSeleccionado] = useState(false)

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

    const onAdd = (unidadSeleccionada) => {
        console.log("On Add desde el ItemDetailContainer")
        if (unidadSeleccionada != undefined) {
            setSeleccionado(unidadSeleccionada)
        }
    }

    return (
        <>
            <section className='producto'>
                <h2>{productos.nombre}</h2>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
                <p>{seleccionado ? "ya se selecciono algo!" : "No se eligion ninguna cantidad"}</p>
                {seleccionado ? <Link to="/cartwidget">carrito</Link> : null}
            </section>
        </>
    )
}

export default ItemDetailContainer;