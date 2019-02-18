// my og solution:
// export function managePresents(state, action){
//     switch (action.type) {
//         case "INCREASE":
//             return {numberOfPresents: state.numberOfPresents + 1}
//         default:
//             return state
//     }
// }

// solution from learn:
export function managePresents(state = {
    numberOfPresents: 0,
  }, action) {
    switch(action.type) {
  
      case "INCREASE":
        return Object.assign({}, state, {
          numberOfPresents: state.numberOfPresents + 1
        });
  
      default:
        return state;
    }
  };
  