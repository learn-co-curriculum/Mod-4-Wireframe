import { combineReducers } from 'redux'
import notes from './notes'
import user from './users'
import note from './note'

const RootReducer = combineReducers({ notes, user, note })

export default RootReducer
