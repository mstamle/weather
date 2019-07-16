import React from 'react';
import logo from './logo.svg';
import './App.css';

import WeatherContainer from './Weather/WeatherContainer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WeatherContainer/>
      </header>
    </div>
  );
}

export default App;
