import React from 'react';
import PropTypes from 'prop-types';

const TableHeaderCell = (props) => {
  const { name, index } = props;
  return (
    <th className="column-name" key={`column-name-${index.toString}`}>
      {name}
    </th>
  );
};

export default TableHeaderCell;

TableHeaderCell.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
