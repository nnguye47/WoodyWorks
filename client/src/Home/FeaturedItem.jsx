import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: black;
  border-color: red;
  border-width: 1px;
  border-style: solid;
`;

export default function FeaturedItem() {
  return (
    <Item id="featuredItem">
      <img src="" alt="img" />
      <p>Product Name</p>
      <p>Category</p>
    </Item>
  );
}
