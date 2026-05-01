import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import kids from "../assets/kids_icon.png"

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-black px-5"
      data-bs-theme="dark"
    >
      <Container fluid className="p-0">
        <Navbar.Brand href="#">
          <img
            src={logo}
            height="60"
            className="d-inline-block align-top"
            alt="Netflix logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active href="#">
              Home
            </Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <i className="fs-4  text-light bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#" className="ms-2">
              <img src={kids} alt="avatar profilo" height="35" />
            </Nav.Link>
            <Nav.Link href="#" className="ms-2">
              <i className="fs-4  text-light bi bi-bell-fill"></i>
            </Nav.Link>

            <NavDropdown
              className="ms-2"
              title={<img src={avatar} alt="avatar profilo" height="35" />}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#">Profilo</NavDropdown.Item>
              <NavDropdown.Item href="#">Impostazioni</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
