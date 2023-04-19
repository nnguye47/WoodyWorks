import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: #faf5eb;
  width: 100%;
  height: 75px;
  line-height: 75px;
`;

const Logo = styled.img`
  float: left;
  height: 70px;
  width: 70px;
`;

const Links = styled.ul`
  float: right;
`;

const LinkItem = styled.li`
  display: inline-block;
  list-style: none;
`;

const Anchors = {
  fontSize: '25px',
  paddingRight: '25px',
  color: '#809CBF',
  textDecoration: 'none',
};

export default function Nav() {
  return (
    <NavBar id="nav">
      <Logo src="./assets/logo.png" alt="logo" height="70" width="70" />
      <Links>
        <LinkItem>
          <Link to="/" style={Anchors}>
            Home
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/art" style={Anchors}>
            Art
          </Link>
        </LinkItem>
      </Links>
    </NavBar>
  );
}
