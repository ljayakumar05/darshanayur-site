import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      var i = 1;
    return (
      <div>
          <h1>Header</h1>
          <h2>Content</h2>
          <h3>This is the Content This is new line..</h3>
          <h1>{5+5}</h1>
          <h1>{i == 1 ? 'True!' : 'False'}</h1>
      </div>
    );
  }
}

export default App;
