//style
import './App.css';

// packages
import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'

// components
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"

// services
import { clearToken, getToken } from './services/local-storage'


class App extends Component {

  handleLogout = () => {
    clearToken()
  }
  
    render() {

      return (
        
        <Router>
        <div className="App">
  
        <Switch>
  
        <Route exact path="/" render={() => <Home />} />

        <Route path="/login" render={() => <Login />} />

        <Route path="/profile" render={() => <Profile />} />

        </Switch>

        <button onClick={this.handleLogout}>Logout</button>
  
        </div>
        </Router>
      );
    }
  }
  
  
  export default App