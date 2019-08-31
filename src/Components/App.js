import React, { Component } from 'react';
import Router from 'Components/Router';
import Globalstyled from 'Components/GlobalStyled';

class App extends Component {
  render() {
    return (
      <>
        <Router/>
        <Globalstyled/>
      </>
    );
  }
}

export default App;
