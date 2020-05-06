const NotesReducer = (state=[],action) => {
  switch(action.type){
    case 'notes':
      return action.notes
    default:
      return state
  }
}

export default NotesReducer
