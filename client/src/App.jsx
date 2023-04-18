import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Home from './Home/Home';
import Art from './Art/Art';
import Greeting from './Home/Greeting';

const HomeLayout = styled.div`
  width: 100%;
`;

function App() {
  const [page, setPage] = useState('art');

  const changePage = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPage(e.target.value);
  };

  // if (page === 'home') {
  //   return (
  //     <div>
  //       <Nav changePage={changePage} />
  //       <HomeLayout className="App">
  //         <Home />
  //       </HomeLayout>
  //     </div>
  //   );
  // }

  // if (page === 'art') {
  //   return (
  //     <div className="App">
  //       <Nav changePage={changePage} />
  //       <Art />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Nav changePage={changePage} />
      <HomeLayout className="App">
        <Home />
      </HomeLayout>
    </div>
  );
}

export default App;
