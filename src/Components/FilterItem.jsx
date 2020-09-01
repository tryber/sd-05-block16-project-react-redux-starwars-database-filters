import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RemoveFilterButton from './RemoveFilterButton';

const Item = (props) => {
  const {
    column, comparison, value, index,
  } = props;
  return (
    <li className="filter-item-container" data-testid="filter" key={index}>
      <RemoveFilterButton filterIndex={index} />
      <span className="filter-item-column">{column}</span>
      <span className="filter-item-comparison">{comparison}</span>
      <span className="filter-item-value">{value}</span>
    </li>
  );
};

class FilterItem extends Component {
  render() {
    const { column, comparison, value } = this.props;
    return (
      <Item column={column} comparison={comparison} value={value} />
    );
  }
}

const mapStateToProps = ({ filterReducer: { filters } }) => {
  const { column, comparison, value } = filters;
  return {
    column,
    comparison,
    value,
  };
};

FilterItem.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Item.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(FilterItem);
