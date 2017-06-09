import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav.jsx'
import List from './List.jsx'
import { fetchContacts, closeOverlay } from '../actions/actions.js'
import ContactEntry from './ContactEntry.jsx'

const overlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '10',
  backgroundColor: 'rgba(0,0,0,0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onOverlayClick = this.onOverlayClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchContacts());
  }

  onOverlayClick() {
    this.props.dispatch(closeOverlay());
  }

  render() {
    return (
      <div>
        <Nav />
        <List />
        {this.props.contacts.modal &&
          <div style={overlayStyle}
            onClick={this.onOverlayClick}
          >
            <ContactEntry contact={this.props.contacts.modal} />
          </div>
        }
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