import React from 'react'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getPost } from '../actions/postsActions'
import './PostView.css'

function PostView(props) {
    const history= useHistory()
   const id= props.match.params.id
   const dispatch= useDispatch()
   

   useEffect(()=>{
    console.log(id)
       dispatch(getPost(id))
   },[id])
   const post = useSelector(state => state.posts.selectedPost)

//    const getPost=(id)=>{
//     fetch(`http://localhost:3000/posts/${id}`).then(res => res.json().then(data => setPost(data)))
    

//    }
    return (
        <div className="postView">
            <div className="postViewTitle" >
                {post.title}
            </div>

            <div className="postViewBody">
                {post.body}
            </div>

        </div>
    )
}

export default PostView
