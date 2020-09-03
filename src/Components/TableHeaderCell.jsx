import React from 'react';
import PropTypes from 'prop-types';

const TableHeaderCell = (props) => {
  const { name } = props;
  return (
    <th className="column-name">
      {name}
    </th>
  );
};

export default TableHeaderCell;

TableHeaderCell.propTypes = {
  name: PropTypes.string.isRequired,
};
