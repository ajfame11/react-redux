import React, { useState } from 'react'
import Nav from './nav'
import './Post.css'

function Post() {
    const [title, setTitle]= useState("myPost")
    const [image, setImage]= useState("http://..")
    const [body, setBody]= useState("my post body")

    return (
           <div className="postWrapper">
                <Nav/>
        <div className="post">
            <div>
                {title}
            </div>

            <div>
                <img src={image} alt="post image" />
            </div>

            <div>
                {body}
            </div>
        </div>
           </div>
    )
}

export default Post
