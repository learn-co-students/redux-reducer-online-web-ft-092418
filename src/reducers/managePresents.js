export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return state = {...state, numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}
