export const FETCHING_CONTACTS = 'FETCHING_CONTACTS';
export const RECEIVED_CONTACTS = 'RECEIVED_CONTACTS';
export const CHANGE_FILTER = 'CHANGE_FILTER';

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
    return fetch('https://randomuser.me/api/?results=99&nat=us', config)
      .then(response => response.json())
      .then((responseJSON) => {
        let contactsByLastName = responseJSON.results.sort(function(a, b) {
          let x = a.name.last;
          let y = b.name.last;
          if (x < y) { return -1;}
          if (x > y) { return 1;}
          return 0;
        });
        let contactsByFirstName = responseJSON.results.sort(function(a, b) {
          let x = a.name.first;
          let y = b.name.first;
          if (x < y) { return -1;}
          if (x > y) { return 1;}
          return 0;
        });
        contactsByLastName = alphabetizeContacts(contactsByLastName, 'last');
        contactsByFirstName = alphabetizeContacts(contactsByFirstName, 'first');
        dispatch(receivedContacts({
          last: contactsByLastName,
          first: contactsByFirstName
        }));
      })
      .catch(error => console.error(error));
  };
};

// helper function to sort contacts by letter of the alphabet
const alphabetizeContacts = (contacts, filter='last') => {

  let results = {};

  for (var k in contacts) {
    let letter = contacts[k].name[filter][0];
    if (results[letter]) {
      results[letter].push(contacts[k]);
    } else {
      results[letter] = [contacts[k]];
    }
  }

  return results;

};


export const changeFilter = (filter) => (
  {
    type: CHANGE_FILTER,
    filter
  }
);

