import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from './data.js';
import Detail from './routes/detail.js';
import axios from 'axios';

function App() {

  let [shoes , setShoes] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">
    
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail/0')}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate(-1)}>뒤로</Nav.Link>
            <Nav.Link onClick={() => navigate(1)}>앞으로</Nav.Link>
          </Nav>
        </Container>
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
        <Route path='/detail/:id' element={
          <>
            <Detail shoes={shoes} />
          </>
        } />

        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>지도임</div>} />
        </Route>

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>

        <Route path='*' element={<div>없는 페이지입니다</div>} />
      </Routes>

      <button onClick={() => {
        axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => { 
          let copy = [...shoes, ...result.data];
          console.log(copy)
          setShoes(copy);

        })
        .catch(() => {
          console.log('로드 실패')
        })
      }}>버튼</button>

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

function About() {
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  ) 
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
