import React, { useState } from 'react';
import styled from 'styled-components';
// import MyModal from '../Modal';
import Nav from '../Nav';
import ProductsList from './ProductsList';

const ArtHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 25px;
`;

const Sel = styled.div`
  align-self: center;
  display: inline-block;
`;

const Divider = styled.hr`
  background-color: #809CBF;
  width: 35%;
  height: 2px;
  border-radius: 20px;
  margin: auto;
`;

export default function Art() {
  const [currentPage, setCurrentPage] = useState('shop');

  const handleSort = (e) => {
    console.log(e.target.value);
    // setSort(e.target.value);
  };

  return (
    <div>
      <Nav currentPage={currentPage} />
      <ArtHome>
        <h1>Stationary and Art</h1>
        <img src="./assets/artbear.png" alt="hello" width="300" height="300" />
        <Divider />
        <ProductsList />
      </ArtHome>
    </div>
  );
}
