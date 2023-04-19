import React from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';
import styled from 'styled-components';
import Product from './Product';

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 70%;
`;

export default function ProductsList() {
  // const [sort, setSort] = useState('newest');

  // useEffect(() => {
  //   axios.get(`/products?category=art&count=5&sort=${sort}`);
  // }, [sort]);

  return (
    <List id="productList">
      <Product />
      <Product />
      <Product />
    </List>
  );
}
