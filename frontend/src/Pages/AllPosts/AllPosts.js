import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Nav from '../../components/nav'
import './AllPosts.css'

function AllPosts() {
    const post={
        title: 'myPost',
        body: 'post body',
        image: 'http://..'
    }
    const history= useHistory()
    const handlePost=()=>{
        history.push("/post")
    }
    const [posts, setPosts]= useState([post, post, post])
    return (
        <div className="allposts">
            <Nav/>
            {
                posts.map((post)=>{
                    return <div onClick={handlePost} >{post.title}</div>
                })
            }
        </div>
    )
}

export default AllPosts
