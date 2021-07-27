import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import PostsList from './PostsList'
import About from '../components/About'
import PostView from './PostView';
import EditPost from './EditPost';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/about' component={About} />
            <Route exact path='/Posts' component={PostsList} />
            <Route exact path='/viewpost/:id' component={PostView} />
            <Route exact path='/editpost/:id' component={EditPost} />
        </Switch>
    );
};

export default Router