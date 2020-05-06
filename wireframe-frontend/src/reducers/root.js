import { combineReducers } from 'redux'
import NotesReducer from './notes'
import UsersReducer from './users'

const RootReducer = combineReducers({NotesReducer, UsersReducer })

export default RootReducer
