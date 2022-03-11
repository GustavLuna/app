import pantallareflectora from '../imagen/pantallareflectora.jpg';
import Item from './Item'

const ItemList = ({productos}) => {

    return (
            <ul>
            <img src={pantallareflectora} alt="" />
            {productos.map((producto)=> {
                return <Item key={producto.id} producto={producto}/>
                })} 
       </ul>
    )
}

export default ItemList

