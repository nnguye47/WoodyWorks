import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// import db from '../../../server/firebase';

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
    opacity: 0.2;
    transition: 0.5s;
  }
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
  console.log(item);
  const { name, description, featured_photo } = item;
  const [btn, setBtn] = useState(false);
  const [image, setImage] = useState('./assets/logo.png');

  // useEffect(() => {
  //   getDownloadURL(ref(db.storage, featured_photo))
  //     .then((url) => {
  //       setImage(url);
  //     })
  //     .catch((err) => {
  //       console.log('could not convert image', err);
  //     });
  // }, [item]);

  const showButton = (e) => {
    setBtn(!btn);
  };

  return (
    <Item id="featuredItem">
      <div>
        <Image onMouseEnter={showButton} onMouseLeave={showButton} src={image} alt="" width="100%" height="65%" />
        {btn ? <ItemBtn>Go To Item</ItemBtn> : null}
      </div>
      <Name>{name}</Name>
      <p>{description}</p>
    </Item>
  );
}
