import React from 'react';
import styled from 'styled-components';

const Prod = styled.div`
  background: lightgreen;
  margin: 10px;
  width: 500px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 10px;
`


export default function Product() {
  return (
    <Prod>
      <img src="./assets/logo.png" alt="product" height="150" width="150"/>
      <div>
        <h2>product name</h2>
        <p>price</p>
        some lengthy descriptions that may or may not fill this area
      </div>
    </Prod>
  );
}
