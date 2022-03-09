import pantallareflectora from '../imagen/pantallareflectora.jpg';
import Item from './Item'

const ItemList = (productos) => {

    return (

    <div><Item>
        <ul className="container">
            <img src={pantallareflectora} alt="" />
            {productos.map((producto, indice) => {
                return <li className="itemContainer">{producto.nombre1}</li>
            })}
            <img src={pantallareflectora} alt="" />
            {productos.map((producto, indice) => {
                return <li className="itemContainer">{producto.nombre2}</li>
            })}
            <img src={pantallareflectora} alt="" />
            {productos.map((producto, indice) => {
                return <li className="itemContainer">{producto.nombre3}</li>
            })}
        </ul>
        </Item>
    </div>
    )
}

export default ItemList