export const postsReducer = (state = [], action) => {
    switch(action.type){
        case 'GET_POSTS':
            return action.payload
        case 'ADD_POST':
            return [...state, action.payload]
        default:
            return state
    }
}