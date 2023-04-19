import React from 'react';
import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Greeting() {
  // const [woody, setWoody] = useState('');

  return (
    <Intro id="greeting">
      <Title>Woody Makes Things</Title>
      <img src="./assets/hiwoody.png" alt="woodyWave" width="300" height="300" />
    </Intro>
  );
}
