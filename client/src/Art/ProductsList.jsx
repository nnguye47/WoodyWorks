import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Modal from 'react-modal';
import styled from 'styled-components';
import Product from './Product';

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 25px;
  width: 70%;
`;

export default function ProductsList() {
  // const [sort, setSort] = useState('newest');
  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        setProds(response.data);
      });
  }, []);

  if (prods.length > 0) {
    return (
      <List id="productList">
        {prods.map((item, index) => (
          <Product item={item} key={index} />
        ))}
        {/* <Product item={prods[0]} /> */}
      </List>
    );
  }

  return (
    <div>
      hello world
    </div>
  );
}
