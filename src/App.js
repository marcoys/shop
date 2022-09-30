import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link} from 'react-router-dom';
import Detail from './detail.js';

function App() {

  let [shoes , setShoes] = useState(data);
  console.log(shoes);

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
        <Link to="/">홈</Link>
        <Link to="/detail">상세페이지</Link>
      </Navbar>

      <div className="main-bg" style={{backgroundImage : 'url('+ process.env.PUBLIC_URL + '/images/bg.png)'}}>
      </div>

      <Routes>
        <Route path='/' element={
          <>
            <Container>
              <Row>
                {
                  shoes.map(function(a, i) {
                    return (
                    <Card shoes={shoes[i]} i={i} key={i}></Card>
                    )
                  })
                }
              </Row>
            </Container>
          </>
        } />
        <Route path='/detail' element={
          <>
          <Detail></Detail>
          </>
        } />
        <Route path='/about' element={<div>어바웃페이지임</div>} />
      </Routes>

      
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"}
        width="80%"
        alt=""
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  );
}

export default App;
