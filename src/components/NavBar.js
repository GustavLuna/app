import logo from '../imagen/logofotografia1.png';
import CartWidget from '../components/CartWidget'

function NavBar() {
    return (
        <nav className="App-header">
            <a href="#"><img src={logo} className="App-logo" alt="logo" /></a>
            <ul>
                <li>
                    <a className="nav-link" href="#">Inicio </a>
                    <a className="nav-link" href="#">Quienes Somos</a>
                    <a className="nav-link" href="#">Eventos</a>
                    <a className="nav-link" href="#">Servicios</a>
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar