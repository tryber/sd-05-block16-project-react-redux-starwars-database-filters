import React from 'react';
import TableHeader from './TableHeader';
import TableFrame from './TableFrame';
import './Table.css';


class Table extends React.Component {
  render() {
    return (
      <table className="table-planets">
        <TableHeader />
        <TableFrame />
      </table>
    );
  }
}

export default Table;
