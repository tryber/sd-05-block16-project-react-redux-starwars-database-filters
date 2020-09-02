import React, { Component } from 'react';
import Cabecalho from './Cabecalho';
import Body from './Body'

export default class Table extends Component {

  render() {
    return (
      <table>
        <Cabecalho />
        <Body />
      </table>
    );
  }
}
