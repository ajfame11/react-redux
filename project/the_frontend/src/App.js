import './App.css';
import React from 'react';

import Router from './components/Router';
import PostsList from './components/PostsList';
import PostsContainer from './components/PostsContainer';
import Nav from './components/Nav'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <PostsContainer />
      <Router />
    </div>
  );
};

export default App;
