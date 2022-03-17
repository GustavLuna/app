const ItemDetail=({producto}) => {

    return(
    
        <article>
        <p>{producto.nombre}</p>
        <p>Precio : ${producto.precio}</p>
        <button>
            ver detalle
        </button>
        </article>)
    }
    
    
    export default ItemDetail;