import { CHANGE_FILTER } from '../actions/actions.js'

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
    default:
      return state
  }
};

export default searchReducer;