import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ColumnName = (props) => {
  const { name, index } = props;
  return (<th className="column-name" key={`column-name-${index.toString}`}>{name}</th>);
};

class TableReader extends Component {
  render() {
    return (
      <tr className="header-row">
        <ColumnName />
      </tr>
    );
  }
}

export default TableReader;

ColumnName.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};

ColumnName.defaultProps = {
  index: 0,
  name: 'test',
};
