import ItemCount from "./ItemCount"
import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import Item from './Item'

let productosIniciales = [
    {
        id: 1,
        nombre1: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre2: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre3: "Producto 3",
        precio: 300
    }
]

const Main = (props) => {

    const onAdd = (value) => {
        alert(`agregaste ${value} productos al carrito`)
    }

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(() => {

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },3000)
        })

        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(productosIniciales)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
           
        })
        .finally(()=>{
            setLoading(false)
        })
    })

    return (
        <main className="container">
            <h1>Bienvenidos  {props.greeting}!</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList>
            <Item/>
                </ItemList>
        </main>
    );
}

export default Main;


// const ItemListContainer = (props) => {

//     const onAdd = (value)=>{
//         alert(`agregaste ${value} productos al carrito`)
//       }

//     return (
//             <itemlistcontainer className="container">
//                 <h1>Bienvenidos  {props.greeting}!</h1>
//             <ItemCount initial={1} stock={5} onAdd={onAdd}/>
//             </itemlistcontainer>
//     )
// }

// export default ItemListContainer


