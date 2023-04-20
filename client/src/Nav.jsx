import React, { useState } from 'react';
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
  padding-left: 25px;
  padding-top: 10px;
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

const Image = styled.img`
:hover {
  cursor: pointer;
  transform: rotate(10deg) scale(1.1);
  transition: transform .1s;
}
`;

export default function Nav({ currentPage }) {
  // const [page, setPage] = useState(currentPage);

  // const changePage = (e) => {
  //   console.log(e.target.alt);
  //   setPage(e.target.alt);
  // };

  return (
    <NavBar id="nav">
      <Logo src="./assets/lightlogo.png" alt="logo" height="70" width="70" />
      <Links>
        <LinkItem>
          <Link to="/home" style={Anchors}>
            <Image
              src={(currentPage === 'home') ? './assets/home_icon.png' : './assets/house.png'}
              alt="home"
              height="100"
              width="100"
            />
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/art" style={Anchors}>
            <Image
              src={(currentPage !== 'shop') ? './assets/cart.png' : './assets/shop.png'}
              alt="shop"
              height="100"
              width="100"
            />
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to="/contact" style={Anchors}>
            <Image
              src={(currentPage === 'contact') ? './assets/contact.png' : './assets/letter.png'}
              alt="contact"
              height="100"
              width="100"
            />
          </Link>
        </LinkItem>
      </Links>
    </NavBar>
  );
}
