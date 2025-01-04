import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#home">Kasir</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;