import pantallareflectora from '../imagen/pantallareflectora.jpg';

const Item=({producto}) => {

return(
    <article >
    <p>{producto.nombre}</p>
    <img src={pantallareflectora} alt="" />
    <p>Precio : ${producto.precio}</p>
    <button>
        ver detalle
    </button>
    </article>)
}


export default Item;