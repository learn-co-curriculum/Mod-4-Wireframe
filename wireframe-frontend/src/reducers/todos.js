function todos(state,action){
  switch(action.type){
    case 'add_todos':
      return Object.assign({},state,{data: action.payload})
    default:
      return state;
  }
}
