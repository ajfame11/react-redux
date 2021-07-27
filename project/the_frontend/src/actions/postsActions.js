

export const getPosts = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/posts')
        .then(resp => resp.json())
        .then(posts => dispatch({ type: 'GET_POSTS', payload: posts}))
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