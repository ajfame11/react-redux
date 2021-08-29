import React, { useState } from 'react'
// import { connect } from 'react-redux'
// import { Button, Card, Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector} from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { editPost, getPost } from '../actions/postsActions';
// import { editPost } from '../actions/postActions';


const EditPost=(props)=> {

    // const [post, setPost] = useState([])
    
    
    const id= props.match.params.id

   const location= useLocation()
   const dispatch= useDispatch()
   const post = useSelector(state=> state.posts.selectedPost)
   const [title, setTiltle] = useState(location.state.title)
   const [body, setBody] = useState(location.state.body)
   const history=  useHistory()

   useEffect( ()=>{
    console.log(id)
   
       dispatch(getPost(id))
    //    setTiltle(post.title)
    //    setBody(post.body)
      
   },[id])
   
 
   
   
    // const getPost = (id) => {
    //     fetch(`http://localhost:3000/posts/${id}`).then(res => res.json().then(data => {
            
    //         setTiltle(data.title)
    //         setBody(data.body)
    //         return setPost(data)
    //     }))
    // }
    const handleChange = e => {
        const { name, value } = e.target
        if (name == "title") {
            setTiltle(value)
        }

        if (name == "body") {
            setBody(value)
        }
    }
    
    const handleSubmit = async (e )=> {
        e.preventDefault()
        // this.props.addPost(this.state)
        const tempPost={
            title: title,
            body: body,
            id: id
        }
         dispatch(editPost(tempPost))
         history.push('/posts')
        // window.location.assign("/posts")
        

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type='text' value={title} onChange={handleChange} name="title" />
                <br />
                <label>Body:</label>
                <input type='text' value={body} onChange={handleChange} name="body" />
                <br />
                <input type='submit' value="Create Post" />
            </form>
        </div>
    )
}

export default connect(state => state,{editPost}) (EditPost)
