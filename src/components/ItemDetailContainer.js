import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"

// let productosIniciales = {
//     id: 1,
//     nombre: "Producto 1",
//     precio: 100
// }

const ItemDetailContainer = () => {

    // const [productos, setProductos] = useState({})
    const [item, setItem] = useState ({})
    const [loading, setLoading] = useState(true)
    const [seleccionado, setSeleccionado] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setTimeout(()=> {
            const promesa = new Promise (`${id}`)

            promesa
                .then((respuesta)=>{
                    return respuesta.json()
                })
                .then((productosIniciales)=> {
                    setItem(productosIniciales)
                })
                .catch(()=> {
                    toast.error("Hubo un error!")
                })
                .finally(()=> {
                    setLoading(false)
                })
            }, 3000)
        }, [id])
            // const promesa = new Promise((res, rej) => {
        //     // setTimeout(() => {
        //     //     res(productosIniciales)
        //     // }, 3000)
        // })

        // promesa
        //     .then((respuestaDeLaApi) => {
        //         setProductos(productosIniciales)
        //     })
        //     .catch((errorDeLaApi) => {
        //         console.log(errorDeLaApi)

        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    

    const onAdd = (unidadSeleccionada) => {
        console.log("On Add desde el ItemDetailContainer")
        if (unidadSeleccionada != undefined) {
            setSeleccionado(unidadSeleccionada)
        }
    }
    return (
            <section className='producto'>
                <p>{item.nombre}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
                <p>{seleccionado ? "ya se seleccionó algo!" : "No se eligió ninguna cantidad"}</p>
                {seleccionado ? <Link to="/cartwidget">cartwidget</Link> : null}
            </section>
    )
}

export default ItemDetailContainer;