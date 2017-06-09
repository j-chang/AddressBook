import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav.jsx'
import List from './List.jsx'
import { fetchContacts } from '../actions/actions.js'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchContacts());
  }

  render() {
    return (
      <div>
        <Nav />
        <List />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    ...state
  }
);

export default connect(mapStateToProps)(App);