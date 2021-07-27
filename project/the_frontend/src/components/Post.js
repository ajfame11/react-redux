import React from 'react'
import { useHistory } from 'react-router-dom'
import './Post.css'
import PostView from './PostView'

function Post({title, body, id}) {
    const history= useHistory()
    const handlePostView=()=>{
        history.push(`/viewpost/${id}`)
    }
    return (
        <div onClick={()=>handlePostView(title, body, id)} className="post">
            <div className="postTitle" >
                {title}
            </div>
            <div className="postBody" >
                {body}
            </div>
        </div>
    )
}

export default Post
