import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';
import { Carousel } from 'antd';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Carousel vertical>
          <div> <img src={logo} className="App-logo" alt="logo" /></div>
          <div> <img src={logo} className="App-logo" alt="logo" /></div>
          <div> <img src={logo} className="App-logo" alt="logo" /></div>
          <div> <img src={logo} className="App-logo" alt="logo" /></div>
        </Carousel>
         
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           <Button  type="primary"> Learn React</Button>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
