import { combineReducers } from 'redux'
import search from './search.js'
import contacts from './contacts.js'

const rootReducer = combineReducers({
  search,
  contacts
});

export default rootReducer;