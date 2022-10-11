import { click } from '@testing-library/user-event/dist/click';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, changeName } from '../store';

function Cart() {
  let state = useSelector((state) => { return state });
  let dispatch = useDispatch(); // store.js로 요청

  console.log(state.arr);

  return (
    <div>
      {state.user}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
          state.arr.map((a, i) => (
            <tr key={i}>
              <td>{state.arr[i].id}</td>
              <td>{state.arr[i].name}</td>
              <td>{state.arr[i].count}</td>
              <td>안녕</td>
              <td>
                <button onClick={() => {
                  dispatch( addCount(state.arr[i].id) ) // Redux 스테이트 변경
              }}>+</button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </Table>
    </div>
  );
}


export default Cart;
