import React from 'react';
import styled from 'styled-components';
import MyModal from '../Modal';
import Nav from '../Nav';
import ProductsList from './ProductsList';

const ArtHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Sel = styled.div`
  align-self: center;
  display: inline-block;
`;

export default function Art() {
  const handleSort = (e) => {
    console.log(e.target.value);
    // setSort(e.target.value);
  };

  return (
    <div>
      <Nav />
      <ArtHome>
        <h1>Stationary and Art</h1>
        {/* <img src="./assets/artbear.png" a/> */}
        <MyModal />
        <Sel>
          <h3 value="newest" onClick={handleSort} value="newest">Newest</h3>
          <h3 value="popular" onClick={handleSort} value="popular">Popular</h3>
          <h3 value="liked" onClick={handleSort} value="mostLiked">Most Liked</h3>
        </Sel>
        <ProductsList />
      </ArtHome>
    </div>
  );
}
