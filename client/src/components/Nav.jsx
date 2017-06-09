import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter, searchQueryChange } from '../actions/actions.js'

const menuStyle = {
  backgroundColor: '#0C0F0F',
  borderRadius: '0',
  minHeight: '80px'
};

const logoStyle = {
  fontFamily: 'Courgette',
  fontSize: '28px',
  color: '#00E1E1'
};

const labelStyle = {
  color: '#fff',
  fontFamily: 'Roboto'
};

const iconStyle = {
  color: '#00E1E1'
};

// helper function to filter contacts based on search query
const queryContacts = ( contacts, query ) => {
  let results = {};

  for (var k in contacts) {
    results[k] = contacts[k].filter( contact => {
      return contact.name.first.includes(query) || contact.name.last.includes(query);
    } );
  }

  return results;

};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onFilterClick = this.onFilterClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onFilterClick(filter) {
    if (filter === this.props.filter) {
      return;
    }
    this.props.dispatch(changeFilter(filter));
  }

  onSearchChange(e) {
    const query = e.target.value.toLowerCase();
    const queriedLast = queryContacts(this.props.contacts.contacts.last, query);
    const queriedFirst = queryContacts(this.props.contacts.contacts.first, query);
    this.props.dispatch(searchQueryChange(query, queriedLast, queriedFirst));
  }

  render() {
    return (
      <div className='ui menu'
        style={menuStyle}>
        <div className='item'>
          <h2 style={logoStyle}>
            Address Book
          </h2>
        </div>
        <div className='item'>
          <div className='ui icon input'>
            <input type='text'
              placeholder='Search...'
              onChange={this.onSearchChange}
            />
            <i className='search icon'/>
          </div>
        </div>
        <div className='item'>
          <div>
            <h4 style={labelStyle}>
              Sort By
            </h4>
          </div>
        </div>
        <div className='item'>
          <div className='ui list'>
            <div className='item' onClick={() => { this.onFilterClick('last') }}>
              <i className={this.props.search.filter === 'last' ? 'selected radio icon' : 'radio icon'}
                style={iconStyle}
              />
              <div className='content'>
                <span style={labelStyle}>
                  Last Name
                </span>
              </div>
            </div>
            <div className='item' onClick={() => { this.onFilterClick('first') }}>
              <i className={this.props.search.filter === 'first' ? 'selected radio icon' : 'radio icon'}
                style={iconStyle}
              />
              <div className='content'>
                <span style={labelStyle}>
                  First Name
                </span>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps)(Nav);