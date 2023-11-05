// import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Row, Col, Form, InputGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";  


function App() {
  return (
    <div className="App">
      <header >
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#SkyTrack">SkyTrack+</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">help</Nav.Link> */}
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      {/* <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      </header>
      <main>
      <Container>
        <Row className='px-4 my-5'>
          <Col sm={4}> 
            <InputGroup className="mb-3">
            {/* <InputGroup.Text id="basic-addon1">+</InputGroup.Text> */}
            <Form.Control
          placeholder="FirstName"
          aria-label="FirstName"
          aria-describedby="basic-addon1"
            />
        </InputGroup>
          </Col>
        <Col sm={4}>
              <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">+</InputGroup.Text> */}
                <Form.Control
                placeholder="Lastname"
                aria-label="Lastname"
                aria-describedby="basic-addon1"
                />
              </InputGroup> 
      </Col>
      <Col sm={4}>
              <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">+</InputGroup.Text> */}
                <Form.Control
                placeholder="Bag #"
                aria-label="Bag #"
                aria-describedby="basic-addon1"
                />
              </InputGroup> 
      </Col>
      </Row>
    <Row className='my-5 justify-content-md-center'>
      <Col md="auto"> {/* md="auto" will size the column based on the content width */}
        <button className="btn btn-primary">Submit</button>
      </Col>
    </Row>
    <div>
      <h3> Travel Ensure; Luggage Secured</h3>
    </div>
    </Container>
      </main>
    </div>
  );
}

export default App;
