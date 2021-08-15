import React from 'react';
import { connect } from 'react-redux'
import Post from './Post';
import PostForm from './PostForm'
// import View from './View'

const PostsList = ({ posts }) => {
    return(
        <div>
            <PostForm />
            <div className="postWrapper" >
            {posts.map((post, key) => <Post title={post.title} body={post.body} id={post.id} key={key} /> )}
            </div>
            {/* <View /> */}
        </div>
    );
};

const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(PostsList);