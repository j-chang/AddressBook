import React from 'react'
import { shallow } from 'enzyme'
import { Nav } from '../client/src/components/Nav.jsx'

describe('Nav Component', () => {

  let nav;

  beforeEach(() => {
    nav = shallow(<Nav search={{ filter: 'last' }}/>);
  });

  it('should render without crashing', () => {
    expect(nav.exists()).toBe(true);
  });

  it('should render a search input', () => {
    expect(nav.find('input').length).toEqual(1);
  });

});