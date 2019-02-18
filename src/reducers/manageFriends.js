// my og solution:
// export function manageFriends(state, action){
    
//     let friends = []
//     switch (action.type) {
//         case "ADD_FRIEND":
//             friends = state.friends
//             friends.push(action.friend)
//             return {friends: friends}
//         case "REMOVE_FRIEND":
//             state.friends.forEach((friend) => {
//                 if (friend.id !== action.id ){
//                     friends.push(friend)
//                 }
//             })
//             return {friends: friends}
            
//         default:
//             return state
//     }
// }

//solution from learn:
export function manageFriends(state = {
    friends: [],
  }, action) {
    switch(action.type) {
  
      case "ADD_FRIEND":
        return (
          {...state,
              friends: [
                ...state.friends,
                action.friend
              ]
          }
      )
  
      case "REMOVE_FRIEND":
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        return (
          {...state,
              friends: [
                ...state.friends.slice(0, removalIndex),
                ...state.friends.slice(removalIndex + 1)
              ]
          }
        )
  
      default:
        return state;
  
    }
};
  