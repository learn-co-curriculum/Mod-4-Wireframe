const NoteReducer = (state=[],action) => {
  switch(action.type){
    case 'note':
      return action.note
    default:
      return state
  }
}

export default NoteReducer
