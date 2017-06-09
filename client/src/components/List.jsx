import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListSection from './ListSection.jsx'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return (
      <div className='ui centered grid'>
        <div className='fourteen wide column'>
          {letters.map( letter => {
            return (
              <ListSection key={letter}
                letter={letter}
              />
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

export default connect(mapStateToProps)(List);