import { useContext } from "react"
import { contexto } from "./miContexto"

const CartWidget = () => {
  const resultado = useContext(contexto)
  const carrito = resultado.carrito
  const borrarDelCarrito = resultado.borrarDelCarrito

  console.log(resultado)

  const handleBorrar = () => {
    console.log("borrar")
  }
  return (
    <>
      <h2>Carrito</h2>
      {carrito.map(item => (
        <div key={item.id}>
          <h3>{item.titulo}</h3>
          <p>{item.descripcion}</p>
          <p>{item.precio} x {item.cantidad}</p>
          <p>Total : ${item.precio * item.cantidad}</p>
          <button onClick={handleBorrar}>borrar</button>
        </div>
      ))}
    </>
  )
}

export default CartWidget