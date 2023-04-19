import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Home from './Home/Home';
import Art from './Art/Art';
import Greeting from './Home/Greeting';

const HomeLayout = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Intro = styled.img`
  width: 65%;
  height: 30%;
`;

function App() {
  const [currentPage, setCurrentPage] = useState('app');

  return (
    <div>
      <Nav currentPage={currentPage} />
      <HomeLayout className="App">
        {/* <Home /> */}
        <img src="./assets/woodymakesthings.png" alt="woody" width="60%" height="20%" />
        <img src="./assets/hiwoody.png" alt="hiwoody" width="30%" height="30%" />
      </HomeLayout>
    </div>
  );
}

export default App;
