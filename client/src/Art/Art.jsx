import React from 'react';
import styled from 'styled-components';
import ProductsList from './ProductsList';

const ArtHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
`;

export default function Art() {
  return (
    <ArtHome>
      <h1>Stationary and Art</h1>
      <ProductsList />
    </ArtHome>
  );
}
