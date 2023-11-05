// // import logo from './logo.svg';
// import './App.css';
// import { Navbar, Container, Nav, Row, Col, Form, InputGroup} from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";  
// //import 'Hero.css';



// function App() {
//   return (
//     <div className="App">
//       <header >
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#SkyTrack+">SkyTrack+</Navbar.Brand>
//           <Nav className="me-auto">
//             {/* <Nav.Link href="#home">help</Nav.Link> */}
//             {/* <Nav.Link href="#features">Features</Nav.Link> */}
//             {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
//           </Nav>
//         </Container>
//       </Navbar>
//       {/* <br />
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <br />
//       <Navbar bg="light" data-bs-theme="light">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar> */}
//       </header>
//       <main>
      
//         {/* <h1>SKYTRACK</h1> */}
//         {/* <p>Track your baggage</p> */}
        
//         <div className="video-bg">
//           <video src="/videos/video-1.mp4" autoPlay loop muted />
//           <div className="content">
//             <h1>JUST AS YOUR BAGGAGE IS IMPORTANT LIKE YOU AS A TRAVELER</h1>
//             <p>Track your baggage</p>
//             <p>Let the journey begin</p>

//           </div>
//         </div>
//         <div className="hero-container">
//         <h1>JUST AS YOU BAGGAGES IS IMPORTANT LIKE YOU AS A TRAVELER</h1>
//         <p>Track your baggage</p>
//         <p>Let the journey begin</p>
//         <div className = "hero.btns">
//           .hero-container {
//               height: 100vh;
//               width: 100%;
//               display: flex;
//               flex-direction: column;
//               align-items: center; 
//               box-sizing: inset 0 0 0 100px rgba(0, 0, 0, 0.5);; 
//           }
//         </div>
//       </div>
//       <div className="hero.btns" style={{
//     objectFit: "cover",
//     width: "480px",
//     height: "272px",
//     position: "absolute",
//     zIndex: "10"
// }}></div>
//       <div className="footer">
//             <div className = "sb__footer section__padding">
//             <div className= "sb__footer-links">
//             <div className = "sb__footer-links-div">
//                 <h4> SkyTrack</h4>
//                 <a href ="/About Us">
//                     <p> About Us</p> 
//                 </a>
//                 <a href ="/Support">
//                     <p> Support</p> 
//                 </a>
//                 <a href ="/">
//                     <p> About Us</p> 
//                 </a>
//                 <div className="sb__footer-links-div">
//                 <h4> SkyTrack</h4>
//                 </div>

//             </div>
            
//             </div>
//                 </div>
//         </div>
//       <Container>
//         <Row className='px-4 my-5'>
//           <Col sm={4}> 
//             <InputGroup className="mb-3">
//             {/* <InputGroup.Text id="basic-addon1">+</InputGroup.Text> */}
//             <Form.Control
//           placeholder="FirstName"
//           aria-label="FirstName"
//           aria-describedby="basic-addon1"
//             />
//         </InputGroup>
//           </Col>
//         <Col sm={4}>
//               <InputGroup className="mb-3">
//                 {/* <InputGroup.Text id="basic-addon1">+</InputGroup.Text> */}
//                 <Form.Control
//                 placeholder="Lastname"
//                 aria-label="Lastname"
//                 aria-describedby="basic-addon1"
//                 />
//               </InputGroup> 
//       </Col>
//       <Col sm={4}>
//               <InputGroup className="mb-3">
//                 {/* <InputGroup.Text id="basic-addon1">+</InputGroup.Text> */}
//                 <Form.Control
//                 placeholder="Bag #"
//                 aria-label="Bag #"
//                 aria-describedby="basic-addon1"
//                 />
//               </InputGroup> 
//       </Col>
//       </Row>
//     <Row className='my-5 justify-content-md-center'>
//       <Col md="auto"> {/* md="auto" will size the column based on the content width */}
//         <button className="btn btn-primary">Submit</button>
//       </Col>
//     </Row>
//     <div>
      
//       <h3> Travel Ensure; Luggage Secured</h3>
//     </div>
//     </Container>
//       </main>
      
//     </div>
//   );
// return (
//   <div className="App">
//     {/* ... Your existing Navbar code ... */}
//     <header >
//      <Navbar bg="dark" data-bs-theme="dark">
//        <Container>
//          <Navbar.Brand href="#SkyTrack+">SkyTrack+</Navbar.Brand>
//          <Nav className="me-auto">
//            {/* <Nav.Link href="#home">help</Nav.Link> */}
//            {/* <Nav.Link href="#features">Features</Nav.Link> */}
//            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
//          </Nav>
//        </Container>
//      </Navbar>
//      </header>
// }

// export default App;
import './App.css';
import { Navbar, Container, Nav, Row, Col, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [state,setState]=useState({})
  
  function handleSubmit() {
  
    fetch('http://localhost:8000/baggage/')
    .then(response => response.json())
    .then(data => setState({person_info: data.total}))
    return;
  }
  
  return (
    <div className="App">
      {/* ... Your existing Navbar code ... */}
      <header >
       <Navbar bg="dark" data-bs-theme="dark">
         <Container>
          {!!Object.key(state).length&&state.name}
         <Navbar.Brand href="#SkyTrack+" className="custom-brand">SkyTrack+</Navbar.Brand>
           <Nav className="me-auto">
             {/* <Nav.Link href="#home">help</Nav.Link> */}
             {/* <Nav.Link href="#features">Features</Nav.Link> */}
             {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
           </Nav>
         </Container>
       </Navbar>
       </header>
       
       <main className="vh-100 d-flex align-items-center justify-content-center">
        <div className="video-bg">
          <video src="/videos/video-1.mp4" autoPlay loop muted />
          <div className="overlay"></div>
          <h1 className="header-text">WHERE EVERY BAG JOURNEY IS JUST AS IMPORTANT AS THE TRAVELER</h1>
      
          </div>
        <form className="position-absolute" method='post' id='person_info' >

          <Row className="justify-content-center">
          
            <Col xs={12} md={4}>
              <InputGroup className="mb-3">
                <Form.Control placeholder="FirstName" aria-label="FirstName" />
              </InputGroup>
            </Col>
            <Col xs={12} md={4}>
              <InputGroup className="mb-3">
                <Form.Control placeholder="LastName" aria-label="LastName" />
              </InputGroup>
            </Col>
            <Col xs={12} md={4}>
              <InputGroup className="mb-3">
                <Form.Control placeholder="Bag Number" aria-label="Bag Number" />
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <button className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
            </Col>
          </Row>
        </form>
      </main>
      <footer className="footer mt-auto py-3 bg-dark text-white">
  <Container className="d-flex justify-content-center">
    <Nav>
      <Nav.Link href="#AboutUs" className="text-white">About Us</Nav.Link>
      <Nav.Link href="#Support" className="text-white">Support</Nav.Link>
      <Nav.Link href="#Privacy" className="text-white">Privacy</Nav.Link>
      <Nav.Link href="#ContactUs" className="text-white">Contact Us</Nav.Link> {/* Added Contact Us link */}
      <div id="AboutUs">
        {/* Content of About Us */}
      </div>

    </Nav>
  </Container>
</footer>
    </div>
  );
}

export default App;
