import { CHANGE_FILTER, SEARCH_QUERY_CHANGE } from '../actions/actions.js'

const initialState = {
  filter: 'last',
  query: ''
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    case SEARCH_QUERY_CHANGE:
      return {
        ...state,
        query: action.query
      }
    default:
      return state
  }
};

export default searchReducer;