export default (state = {posts: [], loading: false}, action) => {
    switch(action.type){

        //INDEX
        case("LOADING_POSTS"):
            return {...state, loading:true}
        case("POSTS_LOADED"):
            return {...state, loading:false, posts: action.payload}

        //CREATE
        case("ADDING_POST"):
            return {...state, loading:false, post: action.payload}
        case("POST_ADDED"):
            return {...state, loading:false, posts: [...state.posts, action.payload] }

        //EDIT
        case("EDITING_POST"):
            return {...state, loading:true}
        case("POST_EDITED"):
            return {...state, loading:false, posts: [...state.posts, action.payload]}

        //DELETE
        case("DELETENG_POST"):
            return {...state, loading:false, post: action.payload}
        case("POST_DELETED"):
            return {...state, loading:false, posts: state.posts.filter(post => post.id != action.payload) }

        //DEFAULT
        default: 
            return state
    }
}