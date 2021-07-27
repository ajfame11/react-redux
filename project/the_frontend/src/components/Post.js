import React from 'react'
import { useHistory } from 'react-router-dom'
import './Post.css'
import PostView from './PostView'
import { useDispatch } from 'react-redux'
import { deletePost } from '../actions/postsActions'

function Post({title, body, id}) {
    const history= useHistory()
    const handlePostView=()=>{
        history.push(`/viewpost/${id}`)
    }
    const dispatch= useDispatch()

    const handleDeletePost=(id)=>{
        dispatch(deletePost(id))
        window.location.reload()
    }
    return (
        <div  className="post">
            <div onClick={()=>handlePostView(title, body, id)} className="postTitle pointer" >
                {title}
            </div>
            <div className="postBody" >
                <div className="postButtons" >
                    <div onClick={()=>history.push(`/editpost/${id}`)} className="postEdit pointer">
                        Edit
                    </div>
                    <div onClick={()=> handleDeletePost(id)} className="postDelete pointer">
                        Delete
                    </div>
                </div>
                {body}
            </div>
        </div>
    )
}

export default Post
