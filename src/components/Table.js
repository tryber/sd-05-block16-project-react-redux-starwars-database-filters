import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    return (
      <div>
        <p>Testando</p>
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    );
  }
}

export default Table;
