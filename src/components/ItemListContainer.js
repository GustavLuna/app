import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {

    const onAdd = (value)=>{
        alert(`agregaste ${value} productos al carrito`)
      } 

    return (
            <itemlistcontainer className="container">
                <h1>Bienvenidos  {props.greeting}!</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </itemlistcontainer>
    )
}

export default ItemListContainer


