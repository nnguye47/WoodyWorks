import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../server/firebase';

const Item = styled.div`
  font-size: 1.5em;
  text-align: center;
  width: 250px;
  height: 330px;
  border-radius: 10px;
  position: relative;
`;

const Image = styled.img`
  :hover {
    opacity: 0.45;
    transition: 0.5s;
  }

  border-radius: 10px;
`;

const Name = styled.p`
  :hover {
    cursor: pointer;
  }

  color: #809CBF;
  font-size: 2em;
  font-weight: bold;
`;

const ItemBtn = styled.a`
  border-radius: 5px;
  position: absolute;
  top: 30%;
  left: 35%;
  margin: auto;
  background: transparent;
  text-decoration: none;
  color: black;
`;

export default function FeaturedItem({ item }) {
  const { name, description, featured_photo } = item;
  const [btn, setBtn] = useState(false);
  // const [image, setImage] = useState([]);

  const showButton = (e) => {
    setBtn(!btn);
  };

  return (
    <Item id="featuredItem" onMouseEnter={showButton} onMouseLeave={showButton}>
      <Image src={featured_photo} alt="" width="100%" height="65%" />
      {btn ? <ItemBtn href="" value="">Go To Item</ItemBtn> : null}
      <Name>{name}</Name>
      <p>{description}</p>
    </Item>
  );
}
