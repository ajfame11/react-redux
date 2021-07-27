import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addPost } from '../actions/postsActions'

class PostForm extends Component {

    state = {
        title: "",
        body: ""
    }

    handleChange = e => {
        const { name, value } =e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addPost(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type='text' value={this.state.title} onChange={this.handleChange} name="title" />
                    <br />
                    <label>Body:</label>
                    <input type='text' value={this.state.body} onChange={this.handleChange} name="body" />
                    <br />
                    <input type='submit' value="Create Post" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addPost })(PostForm);