export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND' :
            // return Object.assign({}, state, {})
            return Object.assign({}, state, {friends: [...state.friends, action.friend]})
        case 'REMOVE_FRIEND' :
            const matchIndex = state.friends.findIndex(friend => friend.id === action.id)
            return Object.assign({}, state, {friends: [...state.friends.slice(0, matchIndex), ...state.friends.slice(matchIndex+1)]})
        default:
            return state;
    }
}
