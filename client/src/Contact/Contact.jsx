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

const Ft = styled.div`
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

export default function Contact() {
  const [currentPage, setCurrentPage] = useState('contact');

  return (
    <Ft>
      <Nav currentPage={currentPage} />
      <SectionTitle>About Me</SectionTitle>
      <img src="./assets/hiwoody.png" alt="contactme" width="300" height="300" />
      <Divider />
      <h2>Hi! My name is Lily.</h2>
      <h3>
        I am a SF-based visual artist. My strengths include

        both traditional and digital illustration, with a emphasis
        on colorful, playful interpretations.

      </h3>
    </Ft>
  );
}
