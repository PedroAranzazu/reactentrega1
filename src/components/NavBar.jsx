import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Optica</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Tipos de Lente</Nav.Link>
            <Nav.Link href="#features">Marcas</Nav.Link>
            <Nav.Link href="#pricing">Lentes de contacto</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Container>
      </Navbar>
      <CartWidget></CartWidget>
    </>
  );
};
