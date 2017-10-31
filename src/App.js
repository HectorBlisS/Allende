import React, { Component } from 'react';
import {NavBar} from "./components/navbar/NavBar";

import './App.css';
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
       <Routes/>
      </div>
    );
  }
}

export default App;
