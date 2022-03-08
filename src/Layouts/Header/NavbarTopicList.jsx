import navLogo from '../../Assets/img/react_512.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavbarTopicList = () => {
  return (
    <Navbar className="px-3 p-0 border-bottom" bg="dark" variant='dark' expand="lg">
      <Container fluid className="p-0">
        <NavLink className="m-0" to="/"><img className="logo-img" src={navLogo} alt="Hotel Logo" /></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/comptype">Components Type</NavLink>
            <NavLink className="nav-link" to="/lifecycle">Lifecycle</NavLink>
            <NavLink className="nav-link" to="/state&amp;props">State &amp; Props</NavLink>
            <NavLink className="nav-link" to="/hooks&amp;methods">Hooks vs Methods</NavLink>
            <NavLink className="nav-link" to="/context">ContextAPI</NavLink>
            <NavLink className="nav-link" to="/formslib">Form Libraries</NavLink>
            <NavLink className="nav-link" to="/customhooks">Custom Hooks</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
