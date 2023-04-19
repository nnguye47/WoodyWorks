import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../Nav';

const Divider = styled.hr`
  background-color: #809CBF;
  width: 35%;
  height: 2px;
  border-radius: 20px;
  margin: auto;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  gap: 25px;
`;

const SectionTitle = styled.h1`
  align-self: center;
`;

const Info = styled.div`
  color: #97C2B9;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hi = styled.h2`
  margin: auto;
`;

export default function Contact() {
  const [currentPage, setCurrentPage] = useState('contact');

  return (
    <Cont>
      <Nav currentPage={currentPage} />
      <SectionTitle>Hi! My name is Lily.</SectionTitle>
      <Divider />
      <Info>
        <h3>
          I am a SF-based visual artist. My strengths include

          both traditional and digital illustration, with a emphasis
          on colorful, playful interpretations.

        </h3>
        <img src="./assets/hiwoody.png" alt="contactme" width="300" height="300" />
      </Info>
    </Cont>
  );
}
