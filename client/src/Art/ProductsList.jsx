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
    <div>
      <div>
        <select>
          <option value="newest" onChange={handleSort}>Newest</option>
          <option value="popular" onChange={handleSort}>Popular</option>
          <option value="liked" onChange={handleSort}>Most Liked</option>
        </select>
      </div>
      <List id="productList">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  );
}
