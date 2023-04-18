import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Home from './Home/Home';
import Art from './Art/Art';

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [page, setPage] = useState('art');

  const changePage = (e) => {
    e.preventDefault();
    setPage(e.target.value);
  };

  if (page === 'home') {
    return (
      <div>
        <Nav changePage={changePage} />
        <HomeLayout className="App">
          <Home />
        </HomeLayout>
      </div>
    );
  }

  if (page === 'art') {
    return (
      <div className="App">
        <Nav changePage={changePage} />
        <Art />
      </div>
    );
  }
}

export default App;
