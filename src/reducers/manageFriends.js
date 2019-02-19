export function manageFriends(state, action){
  debugger
  switch (action.type){
    case "ADD_FRIEND":
       return {friends: [...state.friends,action.friend]}
    case "REMOVE_FRIEND":

        let arr = state.friends.filter(friend => {
          if(friend.id != action.id){
            return true
          }
        })
        return {friends: arr}
    default :
      return state
  }
}
