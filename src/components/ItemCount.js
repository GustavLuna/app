import {useState} from "react"

const ItemCount = ({stock=5, initial=1, onAdd}) => {

    const [contador, setContador] = useState(initial)
    const sumar=()=>{if(contador<stock) setContador(contador +1)}
    const restar=()=>{if(contador>0) setContador(contador -1)}


    return (
            <itemcount className="itemContainer">
                <p>{contador}</p>
                <button onClick={sumar}>Sumar</button>   
                <button onClick={restar}>Restar</button>   
                <button onClick={()=>onAdd(contador)}>Agregar a carrito</button> 
            </itemcount>
    )
}

export default ItemCount

