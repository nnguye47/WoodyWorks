import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: green;
  width: 100%;
  height: 75px;
  line-height: 75px;
  background-image: linear-gradient(green, lightgreen);
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

const Anchors = styled.p`
  font-size: 25px;
  padding-right: 25px;
  color: white;
  text-decoration: none;
`;

export default function Nav({ changePage }) {
  return (
    <NavBar id="nav">
      <Logo src="./assets/logo.png" alt="logo" height="70" width="70" />
      <Links>
        <LinkItem onClick={changePage} value="home">
          <Anchors href="" value="home">
            <Link to="/">
              Home
            </Link>
          </Anchors>
        </LinkItem>
        <LinkItem onClick={changePage} value="art">
          <Anchors href="" value="art">
            <Link to="/art">
              Art
            </Link>
          </Anchors>
        </LinkItem>
      </Links>
    </NavBar>
  );
}
