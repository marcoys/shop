import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { createContext, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from './data.js';
import Detail from './routes/detail.js';
import Cart from './routes/Cart.js';
import axios from 'axios';

export let Context1 = createContext();

function App() {

  let [shoes , setShoes] = useState(data);
  let [ click , setClick ] = useState(2);
  let [ loading, setLoading ] = useState(false);
  let [재고] = useState([10, 11, 12])
  let navigate = useNavigate();

  const plusClick = () => {
    setClick(click + 1);
  }

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
          <Context1.Provider value={{ 재고, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />

        <Route path='/cart' element={
          <Context1.Provider value={{ shoes }}>
            <Cart />
          </Context1.Provider>
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

      {
        loading == true ? <Loading /> : null
      }

      <button className='btn_plus' onClick={() => { 

        plusClick();
        console.log(click);
        
        if(click == 3) {
          document.querySelector('.btn_plus').style.display = 'none';
        }

        setLoading(!loading);
        
        axios.get('https://codingapple1.github.io/shop/data' + click + '.json').then((result) => { 
          let copy = [...shoes, ...result.data];
          console.log(copy)
          setShoes(copy);
          setLoading(false);
        })
        .catch(() => {
          console.log('로드 실패')
          setLoading(false);
        })

        // 동시에 ajax 여러개 요청
        // Promise.all([ axios.get('/data1.json'), axios.get('/data2.json')]).then(() => {

        // })

        
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

function Loading() {

  const loadimgUrl = "/images/giphy.gif"
  
  return(
    <div>
      로딩중
      <img src={loadimgUrl} alt="" style={{width: 100}}/>
    </div>
  )
}

export default App;
