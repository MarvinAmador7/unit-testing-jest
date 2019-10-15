import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FavoriteNumber } from './FavoriteNumber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <FavoriteNumber min={10} max={20} />
      </header>
    </div>
  );
}

export default App;
