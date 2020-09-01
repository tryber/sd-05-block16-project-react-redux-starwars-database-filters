import React from 'react';
import TableHeader from './TableHeader';

class Table extends React.Component {
  render() {
    return (
      <table className="table-planets">
        <TableHeader />
      </table>
    );
  }
}

export default Table;
