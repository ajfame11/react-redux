import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { getPosts } from '../../actions/postActions'
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
    const dispatch= useDispatch()
    useEffect(()=>{
        const getPostsL=async ()=>{
            fetch("http://localhost:3001/posts") 
            .then(res => res.json())
            .then(posts => {
                dispatch(setPosts(posts))
                console.log(`posts are: ${posts}`)
            })
            .catch((error) => {
                console.error('Error:', error);
              })
        }
        getPostsL()
        // console.log(JSON.parse(getPosts()))
    },[])
    return (
        <div className="allposts">
            <Nav/>
            {
                // posts.map((post)=>{
                //     return <div onClick={handlePost} >{post.title}</div>
                // })
            }
        </div>
    )
}

export default AllPosts
