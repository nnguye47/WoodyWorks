import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FeaturedItem from './FeaturedItem';

const Feat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
`;

const FtSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function FeaturedList() {
  // const [featured, setFeatured] = useState({});
  useEffect(() => {
    axios.get('/products')
      .then((data) => {
        console.log('my data', data);
      })
      .catch((err) => {
        console.log('could not get data', err);
      });
  }, []);
  return (
    <Feat id="featured">
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
    </Feat>
  );
}
