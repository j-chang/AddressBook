import { RECEIVED_CONTACTS, FETCHING_CONTACTS, SEARCH_QUERY_CHANGE, OVERLAY_CLICK, ENTRY_CLICK } from '../actions/actions.js'

const initialState = {
  contacts: {
    last: {},
    first: {},
    queriedLast: {},
    queriedFirst: {}
  },
  isFetching: false,
  modal: null
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
    case SEARCH_QUERY_CHANGE:
      return {
        ...state,
        queriedLast: action.queriedLast,
        queriedFirst: action.queriedFirst
      }
    case OVERLAY_CLICK:
      return {
        ...state,
        modal: null
      }
    case ENTRY_CLICK:
      return {
        ...state,
        modal: action.contact
      }
    default:
      return state
  }
};

export default contactsReducer;