import pantallareflectora from '../imagen/pantallareflectora.jpg';
import { Link } from "react-router-dom"

const Item=({producto}) => {

return(
    <article >
    <p>{producto.nombre}</p>
    <img src={pantallareflectora} alt="" />
    <p>Precio : ${producto.precio}</p>
    <button>
        <Link to={`${producto.id}`}> ver detalle</Link> </button>
    </article>
    )
}

export default Item;