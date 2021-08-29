

export const getPosts = () => {
    return (dispatch) => {
        console.log("c")
        fetch('http://localhost:3000/posts')
        .then(resp => resp.json())
        .then(posts => dispatch({ type: 'GET_POSTS', payload: posts}))
    console.log('d')
    }
}

export const getPost = (id) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/posts/${id}`).then(res => res.json().then(data => {
        
        return dispatch({type: 'SELECTED_POST', payload: data})
        
        // return setPost(data)
    }))
    }
}

export const addPost = post => {
    return dispatch => {
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(post => dispatch({ type: 'ADD_POST', payload: post}))
    }
        
}

export const editPost = (postpassed) => { 
    let post = {title: postpassed.title, body: postpassed.body}
    return dispatch => {
        fetch(`http://localhost:3000/posts/${postpassed.id}`,{
            method: 'PATCH',
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => dispatch({type: "POST_EDIT", payload: postpassed}))
        .catch((error) => {
            console.error('Error:', error);
          })
    }
}

export const deletePost = (id) => {
    return dispatch => {
        fetch(`http://localhost:3000/posts/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => dispatch({type: "POST_DELETE", payload: id}))
        .catch((error) => {
            console.error('Error:', error);
          })
    }
}