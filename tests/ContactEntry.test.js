import React from 'react'
import { shallow } from 'enzyme'
import { ContactEntry } from '../client/src/components/ContactEntry.jsx'

describe('List Section Component', () => {

  let entry;

  beforeEach(() => {

    let contact = {
      name: {
        first: 'Lee',
        last: 'Adam'
      },
      dob: '1945-12-12',
      location: {
        city: 'San Jose'
      },
      picture: {
        large: ''
      }
    };

    entry = shallow(<ContactEntry contact={contact}/>);

  });

  it('should render without crashing', () => {
    expect(entry.exists()).toBe(true);
  });

  it('should render an image', () => {
    expect(entry.find('img').length).toEqual(1);
  });

});