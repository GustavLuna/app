import carrito from '../imagen/carrito.png';

function CartWidget() {
    return (
        <>
          <img src={carrito} className="App-carrito" alt="logo" />
        </>
    )
}

export default CartWidget