import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';

const Prod = styled.div`
  margin: 10px;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
`;

const Image = styled.img`
  :hover {
    cursor: pointer;
  }
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Product() {
  return (
    <Prod>
      <button type="button">
        <Image src="./assets/logo.png" alt="product" height="200px" width="200px" />
      </button>
    </Prod>
  );
}
