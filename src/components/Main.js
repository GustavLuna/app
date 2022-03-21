import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartWidget from '../components/CartWidget';
import { toast } from "react-toastify"

const Main = () => {

    const handleToast = () => {
        toast.info("Soy un toast")
    }

    return (
        <main className="container">
              
              {/* <ItemListContainer greeting = 'a mi tienda'/> */}
              {/* <ItemDetailContainer greeting = 'a mi tienda'/> */}
              <Routes>
                  <Route path= "/" element={<ItemListContainer greeting = 'a mi tienda'/>}/>
                  <Route path= "/categoria/:id" element={<ItemListContainer greeting = 'a mi tienda'/>}/>
                  <Route path= "/cartwidget" element={<CartWidget/>}/>
                  <Route path= "/item/:id" element={<ItemDetailContainer/>}/>
              </Routes>
        </main>
    );
}

export default Main;