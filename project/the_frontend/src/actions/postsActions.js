

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