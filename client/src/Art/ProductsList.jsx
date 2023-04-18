import React from 'react';
// import axios from 'axios';
import Product from './Product';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function ProductsList() {
  // const [sort, setSort] = useState('newest');

  // useEffect(() => {
  //   axios.get(`/products?category=art&count=5&sort=${sort}`);
  // }, [sort]);

  const handleSort = (e) => {
    console.log(e.target.value);
    // setSort(e.target.value);
  };

  return (
    <List id="productList">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </List>
  );
}
