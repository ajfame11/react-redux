export const postsReducer = (state = [], action) => {
    switch(action.type){
        case 'GET_POSTS':
            return action.payload
        case 'ADD_POST':
            return [...state, action.payload]
        case("POST_EDIT"):
            return [...state, action.payload]
        case("POST_DELETE"):
            return [...state, state.filter(post => post.id != action.payload) ]
        default:
            return state
    }
}