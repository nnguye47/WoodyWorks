import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Home/Home';
import Art from './Art/Art';

function App() {
  const [page, setPage] = useState('home');

  const changePage = (e) => {
    e.preventDefault();
    setPage(e.target.value);
  };

  if (page === 'home') {
    return (
      <div className="App">
        <Nav changePage={changePage} />
        <Home />
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
