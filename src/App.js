import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Projects from './components/projects'
import About from './components/about'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <About></About>
            <Projects></Projects>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
