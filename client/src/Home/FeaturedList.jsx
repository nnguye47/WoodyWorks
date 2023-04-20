import React, { useEffect, useState } from 'react';
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
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    console.log('fire use effect')
    axios.get('/products/featured')
      .then((response) => {
        setFeatured(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (featured) {
    return (
      <Feat id="featured">
        {featured.map((item, index) => (
          <FeaturedItem item={item} key={index} />
        ))}
      </Feat>
    );
  }

  return (
    <div>
      fetching data
    </div>
  );
}
