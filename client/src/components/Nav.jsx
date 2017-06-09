import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../actions/actions.js'

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

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onFilterClick = this.onFilterClick.bind(this);
  }

  onFilterClick(filter) {
    if (filter === this.props.filter) {
      return;
    }
    this.props.dispatch(changeFilter(filter));
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
              <i className={this.props.filter === 'last' ? 'selected radio icon' : 'radio icon'}
                style={iconStyle}
              />
              <div className='content'>
                <span style={labelStyle}>
                  Last Name
                </span>
              </div>
            </div>
            <div className='item' onClick={() => { this.onFilterClick('first') }}>
              <i className={this.props.filter === 'first' ? 'selected radio icon' : 'radio icon'}
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
    filter: state.search.filter,
    query: state.search.query
  }
);

export default connect(mapStateToProps)(Nav);