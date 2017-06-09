import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactEntry from './ContactEntry.jsx'

const labelStyle = {
  fontFamily: 'Roboto',
  fontSize: '38px',
  color: '#00E1E1'
};

const borderStyle = {
  marginBottom: '28px',
  borderTop: '3px solid black'
};

const boxStyle = {
  boxShadow: '0 0 0 0',
  border: '0'
};

export class ListSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let contacts = this.props.contacts.contacts[this.props.search.filter][this.props.letter] || [];

    if (this.props.search.query && this.props.search.filter === 'last') {
      contacts = this.props.contacts.queriedLast[this.props.letter] || [];
    } else if (this.props.search.query && this.props.search.filter === 'first') {
      contacts = this.props.contacts.queriedFirst[this.props.letter] || [];
    }

    if (contacts.length === 0) {
      return null;
    }

    return (
      <div className='ui segment'
        style={boxStyle}
      >
        <h3 style={labelStyle}>
          {this.props.letter.toUpperCase()}
        </h3>
        <div className="ui fitted divider" style={borderStyle}></div>
        <div className='ui grid'>
          {contacts.map( contact => {
            return (
              <ContactEntry key={Math.random()} contact={contact} />
            );
          } )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    ...state
  }
);

export default connect(mapStateToProps)(ListSection);