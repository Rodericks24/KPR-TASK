import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbars() {
  return (
    <>
      <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">BookShow</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add">Add movie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navbars;