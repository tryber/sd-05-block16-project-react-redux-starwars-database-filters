import React, { Component } from 'react';
import Cabecalho from './Cabecalho';
import Body from './Body';
import AllFilters from './AllFilters';

export default class Table extends Component {
  render() {
    return (
      <div>
        <AllFilters />
        <table>
          <Cabecalho />
          <Body />
        </table>
      </div>
    );
  }
}
