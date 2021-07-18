//style
import './App.css';

// packages
import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'

// components
import Home from "./components/Home"


class App extends Component {

    
  
    render() {
      return (
        <Router>
        <div className="App">
  
        <Switch>
  
        <Route exact path="/" render={() => <Home />} />

        <Route exact path="/" render={() => <Home />} />

        <Route exact path="/" render={() => <Home />} />

        </Switch>
  
        </div>
        </Router>
      );
    }
  }
  
  
  export default App