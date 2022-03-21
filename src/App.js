import NavBar from './components/NavBar'
import Main from './components/Main'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import MiProvider from "./components/miContexto"


function App() {
    return (
        <MiProvider>
            <BrowserRouter>
                <NavBar />
                <Main />
                <ToastContainer />
            </BrowserRouter>
        </MiProvider>
    )
}

export default App    