import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Weather from './Weather'
import City from './City'

class App extends Component {
  render() {
    return (
      <div className="App">
          <City />
          <Weather />
      </div>
    );
  }
}

export default App;


