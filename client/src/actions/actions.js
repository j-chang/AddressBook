export const FETCHING_CONTACTS = 'FETCHING_CONTACTS';
export const RECEIVED_CONTACTS = 'RECEIVED_CONTACTS';

const fetchingContacts = () => (
  {
    type: FETCHING_CONTACTS,
    isFetching: true
  }
);

const receivedContacts = (contacts) => (
  {
    type: RECEIVED_CONTACTS,
    contacts,
    isFetching: false
  }
);

export const fetchContacts = () => {
  const config = {
    method: 'GET'
  };
  return (dispatch) => {
    dispatch(fetchingContacts());
    return fetch('https://randomuser.me/api/?results=99', config)
      .then(response => response.json())
      .then((responseJSON) => {
        dispatch(receivedContacts(responseJSON.results));
      })
      .catch(error => console.error(error));
  };
};