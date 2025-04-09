import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const NewNavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src="https://pbs.twimg.com/media/Fxz2yP9XgAABmdo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Toma_gap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Cadastro">Cadastro</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Unidades" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Vitoria</NavDropdown.Item>
              <NavDropdown.Item href="">Serra</NavDropdown.Item>
              <NavDropdown.Item href="">Vila Velha</NavDropdown.Item>
              <NavDropdown.Item href="">Brasilia</NavDropdown.Item>
              <NavDropdown.Item href="">São Paulo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Text>
              Usuario: <a href="#login">Pedro</a>
            </Navbar.Text>
            <Button variant="danger">Sair</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavBar;
