import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { css } from 'styled-components';
import { Table } from 'react-bootstrap';
import { cleanup } from '@testing-library/react';
import { Context1 } from './../App.js';
import { useSelector } from 'react-redux';

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  console.log(state.arr);

  return (
    <div>
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
            </tr>
          ))
          }
        </tbody>
      </Table>
    </div>
  );
}


export default Cart;
