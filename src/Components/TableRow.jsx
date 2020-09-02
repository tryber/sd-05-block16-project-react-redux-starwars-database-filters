import React from 'react';
import PropTypes from 'prop-types';
import TableItem from './TableItem';

const TableRow = (props) => {
  const { rowItems, rowId } = props;
  return (
    <tr className={`table-row row-number-${rowId}`} key={`row-number-${rowId}`}>
      {Object.entries(rowItems).map(([collName, itemValue], cellId) => (
        <TableItem collName={collName} itemValue={itemValue} cellId={cellId} />
      ))}
    </tr>
  );
};
/*  */
export default TableRow;

TableRow.propTypes = {
  rowItems: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  rowId: PropTypes.number.isRequired,
};
