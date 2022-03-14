import './NavbarTopicList.css';
import navLogo from '../../Assets/img/react_512.png';
import user from '../../Assets/img/user.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuthentication } from '../../Utils/useAuthentication';

export const NavbarTopicList = () => {
  // Custom hook to verify user is loged in or not using global context.
  const userAuth = useAuthentication();

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
            <NavLink className="nav-link" to="/events&amp;conditions">Events &amp; Conditions</NavLink>
            <NavDropdown title="Hooks vs Methods" id="collasible-nav-dropdown">
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/hooks/memo&amp;callback">Prevent Re-render Hook</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/hoc/counters">HOC For Counters</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/methods/errorBoundary">Error Boundary</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/methods/createRef">Create Ref Method</NavLink></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="APIs" id="collasible-nav-dropdown">
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/api/context">Context API</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/api/fetch">Fetch API</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/api/wordrhymes">Word Rhymes API</NavLink></NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/formslib">Form Libraries</NavLink>
            <NavDropdown title="Custom Hooks" id="collasible-nav-dropdown">
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/customhooks/axiosapicall">Axios API</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/customhooks/sysinfo">System Info</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/customhooks/formvalidations">Form Validations</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/customhooks/arrayoperations">Array Operations</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link text-black p-0" to="/customhooks/copy2clipboard">Copy to Clipboard</NavLink></NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          </Nav>
          { //If user is loged in then will hide signin & signup buttons.
            !(userAuth?.userData) &&
            <Nav className="ms-auto align-items-center flex-row flex-nowrap justify-content-center">
              <Link className="btn user-auth-btn" to="/register" state={{ fieldStyle: 'form-group', errStyle: 'offset-5 col-sm-7', btnText: 'Sign Up' }}>Sign Up</Link>
              <span className="border-divider"></span>
              <Link className="d-flex align-items-center btn user-auth-btn" to="/login" state={{ fieldStyle: 'form-group d-none', errStyle: 'd-none', btnText: 'Sign In' }}>Sign In <div><img src={user} className="user-icon" alt="User Icon" /></div></Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
