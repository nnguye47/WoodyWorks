import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  background: green;
`;
export default function Nav({ changePage }) {
  return (
    <NavBar id="nav">
      <img src="./assets/logo.png" alt="logo" height="50" width="50" />
      <button type="button" value="home" onClick={changePage}>Home</button>
      <button type="button" value="art" onClick={changePage}>Art</button>
    </NavBar>
  );
}
