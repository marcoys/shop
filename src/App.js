import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{backgroundImage : 'url('+ process.env.PUBLIC_URL + '/images/bg.png)'}}>
      </div>

      <Container>
        <Row>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" alt="" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" alt="" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" alt="" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
