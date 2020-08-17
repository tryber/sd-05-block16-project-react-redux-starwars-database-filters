import React from 'react';
import TableFirstLine from '../components/TableFirstLine';
import TableInfo from '../components/TableInfo';

class Table extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <TableFirstLine />
        <TableInfo />
      </div>
    );
  }
}

export default Table;
