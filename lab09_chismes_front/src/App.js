import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChismeList from './components/ChismeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChismeList></ChismeList>
      </div>
    );
  }
}

export default App;
