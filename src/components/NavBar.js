import logo from '../imagen/logofotografia1.png';

function NavBar() {
    return (
        <nav className="App-header">
            <a href="#"><img src={logo} className="App-logo" alt="logo" /></a>
            <ul>
                <li>
                    <a class="nav-link" href="#">Inicio </a>
                    <a class="nav-link" href="#">Quienes Somos</a>
                    <a class="nav-link" href="#">Eventos</a>
                    <a class="nav-link" href="#">Servicios</a>
                    <a class="nav-link" href="#">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar