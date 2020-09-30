import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Table extends Component {
  render() {
    return (
      <table>
        <Header />
        <Body />
      </table>
    );
  }
}

export default Table;
