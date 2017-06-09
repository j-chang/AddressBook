import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../client/src/components/App.jsx'

describe('App', () => {

  let app;

  beforeEach(() => {
    app = shallow(<App contacts={{ modal: false }}/>);
  });

  it('should render without crashing', () => {
    expect(app.exists()).toBe(true);
  });

});