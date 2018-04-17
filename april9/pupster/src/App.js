import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import About from "./components/About";
import Discover from "./components/Discover";
import Search from "./components/Search";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pupster</h1>
        </header>
          <NavTabs/>

          <Route path="/about" component={About}/>
          <Route path="/discover" component={Discover}/>
          <Route path="/search" component={Search}/>

      </div>
    );
  }
}

export default App;
