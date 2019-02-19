export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      const newFriends = state.friends.filter(obj => obj.id != action.id)
      return {friends: newFriends}
    default:
      return state
  }
}
