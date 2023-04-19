import React from 'react';
import styled from 'styled-components';
import Greeting from './Greeting';
import FeaturedList from './FeaturedList';

const Ft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
  gap: 25px;
`;

const SectionTitle = styled.h1`
  align-self: center;
`;

const Divider = styled.hr`
  background-color: #809CBF;
  width: 35%;
  height: 2px;
  border-radius: 20px;
  margin: auto;
`;

export default function Home() {
  return (
    <Ft>
      <Greeting />
      <Divider />
      <SectionTitle>Featured Items</SectionTitle>
      <FeaturedList />
    </Ft>
  );
}
