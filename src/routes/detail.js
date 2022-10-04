import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { css } from "styled-components";

function Detail(props) {
  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(i) {
    return i.id == id;
  })
  let [alertt, setAlert] = useState(true);
  let [ip, setInput] = useState('');
  
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

  return (
    <div className="container">
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
    </div> 
  )
}

export default Detail;