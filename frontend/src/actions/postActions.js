export const getPosts = () => {
    return dispatch => {
        dispatch({type: "LOADING_POSTS"})
        fetch("/posts") 
        .then(res => res.json())
        .then(posts => dispatch({type: "POSTS_LOADED", payload: posts}))
        .catch((error) => {
            console.error('Error:', error);
          })
    }
}

export const addPost = (blog) => {
    return dispatch => { //thunk allows us to do asyn actions 
        dispatch({type: "ADDING_BOOK"})
        console.log("C")
        fetch("/blogs",{ //initial order The Fetch API provides a JavaScript interface for accessing and manipulating our db, using a requests and responses.
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json()) //promise is returned and we further process it.
        .then(blog => { //another promise is returned and we further process it
            console.log("e")
            dispatch({type: "BOOK_ADDED", payload: blog})})
          
        .catch((error) => {
            console.error('Error:', error);
          })

          console.log("d") //asynk process which is why its after c
    }
}