import React from 'react';
// import axios from 'axios';
import Product from './Product';

export default function ProductsList() {
  // const [sort, setSort] = useState('newest');

  // useEffect(() => {
  //   axios.get(`/products?category=art&count=5&sort=${sort}`);
  // }, [sort]);

  const handleSort = (e) => {
    console.log(e.target.value);
    // setSort(e.target.value);
  };

  return (
    <div>
      <div>
        <select>
          <option value="newest" onChange={handleSort}>Newest</option>
          <option value="popular" onChange={handleSort}>Popular</option>
          <option value="liked" onChange={handleSort}>Most Liked</option>
        </select>
      </div>
      <div id="productList">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
