import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Luz from './Components/Luces';
import GameContainer from './Components/GameContainer';
import Game from './Components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game></Game>
      </div>
    );
  }
}

export default App;
