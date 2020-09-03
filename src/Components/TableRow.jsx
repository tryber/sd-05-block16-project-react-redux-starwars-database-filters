import React from 'react';
import PropTypes from 'prop-types';
import TableItem from './TableItem';

const TableRow = (props) => {
  const { rowItems, rowId } = props;
  return (
    <tr className={`table-row row-number-${rowId.toString()}`}>
      {rowItems.map(([collName, itemValue], cellId) => (collName !== 'residents') && (
        <TableItem
          collName={collName}
          itemValue={itemValue}
          cellId={cellId}
          key={`row-${rowId.toString()}-column-${cellId.toString()}`}
        />
      ))}
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  rowItems: PropTypes.arrayOf(PropTypes.array).isRequired,
  rowId: PropTypes.number.isRequired,
};
