import React, { Component } from 'react';
import ChismeList from '../ChismeList';
import NewChismeContainer from '../NewChismeContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <ChismeList></ChismeList>
        <NewChismeContainer/>
      </div>
    );
  }
}

export default Home;