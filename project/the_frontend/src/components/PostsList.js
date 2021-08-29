import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../actions/postsActions';
import Post from './Post';
import PostForm from './PostForm'
import View from './View'

const PostsList = () => {
    const posts= useSelector((state)=> state.posts.posts)
    const dispatch= useDispatch()
    useEffect(()=>{
    dispatch(getPosts())
    }, [])
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

// const mapStateToProps = state => {
//     return { posts: state.posts.posts }
// }

export default (PostsList);