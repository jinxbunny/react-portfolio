import React from 'react';
import profileImage from './img/begining.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Auther: Robert Marsh</h2>
      <img src={portfolioImage} alt="image"/>
    </div>
  );
}

export default App;
