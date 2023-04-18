import React from 'react';
import styled from 'styled-components';
import Greeting from './Greeting';
import FeaturedList from './FeaturedList';

const Ft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
`;

const SectionTitle = styled.h1`
  align-self: center;
`;

export default function Home() {
  return (
    <Ft>
      <Greeting />
      <SectionTitle>Featured Items</SectionTitle>
      <FeaturedList />
    </Ft>
  );
}
