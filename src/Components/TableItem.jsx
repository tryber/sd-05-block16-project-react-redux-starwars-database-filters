import React from 'react';
import PropTypes from 'prop-types';

const TableItem = (props) => {
  const { collName, itemValue, cellId } = props;
  return (
    <td className={`cell coll-${cellId}`} key={collName}>
      {itemValue}
    </td>
  );
};

export default TableItem;
TableItem.propTypes = {
  collName: PropTypes.string.isRequired,
  itemValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  cellId: PropTypes.number.isRequired,
};
