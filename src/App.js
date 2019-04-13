import React, { Component } from 'react';
import Products from './components/products';
import WomenFootwear from './components/women-footwear';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Products />
        <WomenFootwear />
      </div>
    );
  }
}

export default App;
