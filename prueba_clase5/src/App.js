import React, { Component } from 'react';
import './App.css';
import './components/lights'
import './components/Semaforo'
import Light from './components/lights';
import Semaforo from './components/Semaforo/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Semaforo ahora='1'> </Semaforo>
      </div>
    );
  }
}

export default App;
