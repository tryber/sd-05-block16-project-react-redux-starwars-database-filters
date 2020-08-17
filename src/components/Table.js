import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    );
  }
}

export default Table;
