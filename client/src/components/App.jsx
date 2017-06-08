import React, { Component } from 'react'
import Nav from './Nav.jsx'
import List from './List.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <List />
      </div>
    );
  }
}

export default App;