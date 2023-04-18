import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: black;
  background: lightgreen;
  width: 250px;
  height: 330px;
  border-radius: 5px;

  :hover {
    transform: scale(1.1);
    transition: transform 0.75s;
  }
`;

export default function FeaturedItem() {
  return (
    <Item id="featuredItem">
      <img src="./assets/logo.png" alt="" width="100%" height="65%" />
      <p>Product Name</p>
      <p>Category</p>
    </Item>
  );
}
