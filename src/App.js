import React, { Component } from 'react';
import Products from './components/products';
import WomenFootwear from './components/women-footwear';
import MenFootwear from './components/men-footwear';
import WomenCasual from './components/women-casual';
import MenCasual from './components/men-casual';
import MenFormal from './components/men-formal';
import WomenFormal from './components/women-formal';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Products />
        <WomenFootwear />
        <MenFootwear />
        <WomenCasual />
        <MenCasual />
        <MenFormal />
        <WomenFormal />
      </div>
    );
  }
}

export default App;
