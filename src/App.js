import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

    return (
        <>
            <header>
                <NavBar />
            </header>
            <div><ItemListContainer greeting="a mi tienda" /></div>
            
        </>
    )
}

export default App    