const UsersReducer = (state={},action) => {
  switch(action.type){
    case 'users':
      return action.payload
    default:
      return state
  }
}

export default UsersReducer
