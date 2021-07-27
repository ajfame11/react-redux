import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getPosts } from '../actions/postsActions'

class PostsContainer extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(null, { getPosts })(PostsContainer);