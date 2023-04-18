import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Art from './Art/Art';
import Home from './Home/Home';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="art" element={<Art />} />
      <Route path="*" element={<h1>Route does not exist</h1>} />
    </Routes>
  </BrowserRouter>,
);

// createRoot(document.getElementById('root')).render(<App />);
