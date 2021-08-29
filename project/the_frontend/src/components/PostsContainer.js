import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getPosts } from '../actions/postsActions'

class PostsContainer extends Component {

    componentDidMount() {
        console.log('a')
        this.props.getPosts()
        console.log("b")
    }
   

    render() {
    
        return (
            <div>

            </div>
        );
    }
}

export default connect(null, { getPosts })(PostsContainer);