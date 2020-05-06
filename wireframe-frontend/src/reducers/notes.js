const NotesReducer = (state={data: []},action) => {
  switch(action.type){
    case 'notes':
      return Object.assign({},state,{data: action.payload})
    default:
      return state;
  }
}

export default NotesReducer;
