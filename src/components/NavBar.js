import logo from '../imagen/logofotografia1.png';
import carrito from '../imagen/carrito.png';
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <NavLink className="nav-link" to="/categoria/1">Inicio </NavLink>
            <NavLink className="nav-link" to="/categoria/2">Quienes Somos</NavLink>
            <NavLink className="nav-link" to="/categoria/3">Eventos</NavLink>
            <NavLink className="nav-link" to="/categoria/4">Servicios</NavLink>
            <NavLink className="nav-link" to="/categoria/5">Contacto</NavLink>
            <NavLink to="/CartWidget"><img src={carrito} alt="carrito"></img></NavLink>
        </nav>
    );
};

export default NavBar;