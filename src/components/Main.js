// import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = (props) => {

    return (
        <main className="container">
              {/* <ItemListContainer greeting = 'a mi tienda'/> */}
              <ItemDetailContainer greeting = 'a mi tienda'/>
        </main>
    );
}

export default Main;