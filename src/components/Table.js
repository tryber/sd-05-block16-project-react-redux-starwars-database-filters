import React, { Component } from 'react';
import Cabecalho from './Cabecalho';
import Body from './Body';
import AllFilters from './AllFilters';
import OrderButton from './OrderButton';

export default class Table extends Component {
  render() {
    return (
      <div>
        <AllFilters />
        <OrderButton />
        <table>
          <Cabecalho />
          <Body />
        </table>
      </div>
    );
  }
}
