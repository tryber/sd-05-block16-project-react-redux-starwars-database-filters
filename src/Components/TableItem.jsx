import React from 'react';
import PropTypes from 'prop-types';

const TableItem = ({ collName, itemValue, cellId }) => (
  <td className={`cell coll-${cellId}`} key={collName}>
    {itemValue}
  </td>
);

export default TableItem;
TableItem.propTypes = {
  collName: PropTypes.string.isRequired,
  itemValue: PropTypes.string.isRequired,
  cellId: PropTypes.number.isRequired,
};
