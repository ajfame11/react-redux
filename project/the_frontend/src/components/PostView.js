import React from 'react'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import './PostView.css'

function PostView(props) {
    const history= useHistory()
   const id= props.match.params.id

   useEffect(()=>{
    console.log(id)
       getPost(id)
   },[id])
   const [post, setPost]= useState([])
   const getPost=(id)=>{
    fetch(`http://localhost:3000/posts/${id}`).then(res => res.json().then(data => setPost(data)))
   }
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
