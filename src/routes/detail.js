import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { css } from "styled-components";
import Nav from 'react-bootstrap/Nav';
import { cleanup } from "@testing-library/react";
import { Context1 } from './../App.js'

function Detail(props) {

  let { 재고, shoes } = useContext(Context1);
  

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(i) {
    return i.id == id;
  })
  let [alert, setAlert] = useState(true);
  let [ip, setInput] = useState('');
  let [tab, setTab] = useState(0);
  let [dfade, setDfade] = useState('');
  
  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) }, 2000)

    return () => {
      clearTimeout(a);
    }
  }, [])

  useEffect(() => {
    if (isNaN(ip) == true) {
      alert('그러지 마쇼')
    }
  }, [ip])

  useEffect(() => {
    let b = setTimeout(() => {
      setDfade('end');
    }, 200)

    return () => {
      clearTimeout(b);
      setDfade('')
    }
  }, [])

  return (
    <div className={`container start ${dfade}`}>
      {재고}
      <input type="text" onChange={(e) => { setInput(e.target.value)}} />
      {
        alert == true ? 
        <div className="alert alert-warning">
          2초이내 구매시 할인
        </div>
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => {setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tabcontent tab={tab} />

    </div> 
  )
}

function Tabcontent(props) { //(props) 대신 ({tab}) 사용가능
  // if( props.tab === 0 ) {
  //   return <div>내용0</div>
  // } else if( props.tab === 1 ) {
  //   return <div>내용1</div>
  // } else if( props.tab === 2 ) {
  //   return <div>내용2</div>
  // }
let [fade, setFade] = useState('')
let { 재고 } = useContext(Context1);

  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end')
    }, 300)
    
    return () => {
      clearTimeout(a);
      setFade('');
    }
  }, [props.tab])

  return (
      <div className={`start ${fade}`}>
    {[<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}
      </div>
  )
}

export default Detail;