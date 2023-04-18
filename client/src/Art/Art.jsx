import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import ProductsList from './ProductsList';

const ArtHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Sel = styled.div`
  align-self: end;
  width: 31%;
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
        <Sel>
          <select>
            <option value="newest" onChange={handleSort}>Newest</option>
            <option value="popular" onChange={handleSort}>Popular</option>
            <option value="liked" onChange={handleSort}>Most Liked</option>
          </select>
        </Sel>
        <ProductsList />
      </ArtHome>
    </div>
  );
}
