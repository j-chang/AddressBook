import React from 'react'
import { shallow } from 'enzyme'
import { List } from '../client/src/components/List.jsx'

describe('List Component', () => {

  let list;

  beforeEach(() => {
    list = shallow(<List />);
  });

  it('should render without crashing', () => {
    expect(list.exists()).toBe(true);
  });

  it('should render a ui grid', () => {
    expect(list.find('.grid').length).toEqual(1);
  });

});