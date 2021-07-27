export const getPosts = (pl) => {
    return{
        type: "GET_LOADED",
        payload: pl
    }
}

export const addPost = (post) => {
    return dispatch => { //thunk allows us to do asyn actions 
        dispatch({type: "ADDING_POST"})
        console.log("C")
        fetch("/posts",{ //initial order The Fetch API provides a JavaScript interface for accessing and manipulating our db, using a requests and responses.
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json()) //promise is returned and we further process it.
        .then(post => { //another promise is returned and we further process it
            console.log("e")
            dispatch({type: "POST_ADDED", payload: post})})
          
        .catch((error) => {
            console.error('Error:', error);
          })

          console.log("d") //asynk process which is why its after c
    }
}

export const deletePost = (id) => {
    return dispatch => {
        dispatch({type: "DELETENG_POST"})
        fetch(`/posts/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => dispatch({type: "POST_DELETED", payload: id}))
        .catch((error) => {
            console.error('Error:', error);
          })
    }
}

export const editPost = (postpassed) => { 
    let post = {title: postpassed.title, description: postpassed.description}
    return dispatch => {
        dispatch({type: "EDITING_POST"})
        fetch(`/posts/${postpassed.id}`,{
            method: 'PATCH',
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => dispatch({type: "POST_EDITED", payload: postpassed}))
        .catch((error) => {
            console.error('Error:', error);
          })
    }
}