import NotesReducer from 'notes.js'
import UsersReducer from 'users.js'

const RootReducer = combineReducers({NotesReducer: NotesReducer,UsersReducer: UsersReducer })

export default RootReducer
