import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChismeList from './components/ChismeList';
import NewChismeForm from './components/NewChismeForm';
import NewChismeContainer from './components/NewChismeContainer';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
