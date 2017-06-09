import React, { Component } from 'react'
import { connect } from 'react-redux'
import { entryClick } from '../actions/actions.js'

class ContactEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onEntryClick = this.onEntryClick.bind(this);
  }

  onEntryClick() {
    this.props.dispatch(entryClick(this.props.contact));
  }

  render() {
    const firstName = this.props.contact.name.first[0].toUpperCase() + this.props.contact.name.first.slice(1);
    const lastName = this.props.contact.name.last[0].toUpperCase() + this.props.contact.name.last.slice(1);
    const dob = this.props.contact.dob.slice(0,10).split('-').join('/');
    const city = this.props.contact.location.city.split(' ').map( word => (word[0].toUpperCase() + word.slice(1)) ).join(' ');

    return (
      <div className='four wide column'
        onClick={this.onEntryClick}
      >
        <div className='ui card'>
          <div className='image'>
            <img src={this.props.contact.picture.large}/>
          </div>
          <div className='content'>
            <a className='header'>{ firstName + ' ' + lastName }</a>
            <div className='description'>
              { 'DOB: ' + dob }
              <br />
              { 'City: ' + city }
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

export default connect(mapStateToProps)(ContactEntry);