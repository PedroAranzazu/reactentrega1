import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";





export const NavBar = () => {
  return (
<nav className="navbar">
        <a href="/" className="logo"><h1>Opticalia</h1></a>
        <ul className="menu"></ul>
         <li><Link className="menu-link" to="/">Inicio</Link></li>
         <li><Link className="menu-link" to="/productos">Productos</Link></li>
         <li><Link className="menu-link" to="/productos/Circulares">Circulares</Link></li>
         <li><Link className="menu-link" to="/productos/cat-eye">Cat-eye</Link></li>
         <li><Link className="menu-link" to="/productos/cuadradas">cuadradas</Link></li>
         <li><Link className="menu-link" to="/productos/Aviator">Aviator</Link></li>

</nav>
  );
};
