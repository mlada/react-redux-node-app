import React, { Component } from 'react';
import Main from './Routing/Main';
import {Header, Footer} from './Components';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}