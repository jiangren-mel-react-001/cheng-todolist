import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import './App.css';
import { TodoContainer } from './todo/todo-container';
import { AboutContainer } from './about/about-container';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <span><Link to="/">Todo</Link></span> | 
          <span><Link to="/about">About</Link></span>
    
          <hr/>
    
          <Route exact path="/" component={TodoContainer}/>
          <Route path="/about" component={AboutContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
