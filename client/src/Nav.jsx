import React from 'react';

export default function Nav({ changePage }) {
  return (
    <div id="nav">
      <img src="" alt="logo" />
      <button type="button" value="home" onClick={changePage}>Home</button>
      <button type="button" value="art" onClick={changePage}>Art</button>
    </div>
  );
}
