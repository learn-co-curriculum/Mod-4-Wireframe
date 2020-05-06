import { combineReducers } from 'redux'
import notes from './notes'
import user from './users'

const RootReducer = combineReducers({ notes, user })

export default RootReducer
