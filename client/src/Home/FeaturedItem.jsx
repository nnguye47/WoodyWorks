import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../server/firebase';

const Item = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: black;
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
`;

const ItemBtn = styled.button`
  border-radius: 5px;
  position: absolute;
  top: 30%;
  left: 35%;
  margin: auto;
`;

export default function FeaturedItem({ item }) {
  const { name, description, featured_photo } = item;
  const [btn, setBtn] = useState(false);
  // const [image, setImage] = useState([]);

  const showButton = (e) => {
    setBtn(!btn);
  };

  return (
    <Item id="featuredItem">
      <div>
        <Image onMouseEnter={showButton} onMouseLeave={showButton} src={featured_photo} alt="" width="100%" height="65%" />
        {btn ? <ItemBtn>Go To Item</ItemBtn> : null}
      </div>
      <Name>{name}</Name>
      <p>{description}</p>
    </Item>
  );
}
