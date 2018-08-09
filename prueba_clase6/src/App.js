import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onClick(){
    console.log(this.input.value);
  }

  constructor(props){
    super(props);
    this.state = {valor:'lol'}
  }

  render() {
    const {valor} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" value={valor} onChange={
          e => this.setState({valor:e.target.value})
        }/> 
        <button onClick={this.onClick.bind(this)}>{'GO!'}</button>
      </div>
    );
  }
}

export default App;
