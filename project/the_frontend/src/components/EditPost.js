import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { editPost } from '../actions/postsActions';
// import { editPost } from '../actions/postActions';


function EditPost(props) {

    const [post, setPost] = useState([])
    const [title, setTiltle] = useState("")
    const [body, setBody] = useState("")

    const id = props.match.params.id

    useEffect(() => {
        console.log(id)
        getPost(id)
    }, [id])

   
    const getPost = (id) => {
        fetch(`http://localhost:3000/posts/${id}`).then(res => res.json().then(data => {
            
            setTiltle(data.title)
            setBody(data.body)
            return setPost(data)
        }))
    }
    const handleChange = e => {
        const { name, value } = e.target
        if (name == "title") {
            setTiltle(value)
        }

        if (name == "body") {
            setBody(value)
        }
    }
    const dispatch= useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        // this.props.addPost(this.state)
        const tempPost={
            title: title,
            body: body,
            id: id
        }
        dispatch(editPost(tempPost))
        window.location.assign("/posts")

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

export default EditPost
