import { RECEIVED_CONTACTS, FETCHING_CONTACTS } from '../actions/actions.js'

const initialState = {
  contacts: {
    last: [],
    first: []
  },
  isFetching: false
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CONTACTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVED_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
        isFetching: false
      }
    default:
      return state
  }
};

export default contactsReducer;