import React, { useEffect } from 'react';
import FeaturedItem from './FeaturedItem';

export default function FeaturedList() {
  // const [featured, setFeatured] = useState({});
  useEffect(() => {
    // db.collection('users').where('featured', '==', true)
    //   .get()
    //   .then((data) => {
    //     console.log('data from firebase', data);
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    // });
  }, []);
  return (
    <div id="featured">
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
    </div>
  );
}
