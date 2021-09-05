export const postsReducer = (state = {
    posts:[],
    selectedPost:''
}, action) => {
    switch(action.type){
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'ADD_POST':
            return{
                ...state,
                posts: [...state.posts, action.payload]
            }
            case 'SELECTED_POST':
                return{...state,
                selectedPost: action.payload}

        case("POST_EDIT"):
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case("POST_DELETE"):
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.payload) ]
            }

             
        default:
            return state
    }
}