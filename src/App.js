import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import BasicRouter from 'router/BasicRouter'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <BasicRouter />
      </React.Fragment>
    );
  }
}

export default App;
