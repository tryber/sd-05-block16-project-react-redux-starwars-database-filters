import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from './FilterItem';

class FilterListItems extends Component {
  render() {
    const { filterByNumericValues } = this.props;
    return filterByNumericValues.map((item, index) => (
      <Item item={item} index={index} />
    ));
  }
}

const mapStateToProps = ({ filterReducer: { filters } }) => {
  const { filterByNumericValues } = filters;
  return {
    filterByNumericValues,
  };
};

export default connect(mapStateToProps)(FilterListItems);

FilterListItems.propTypes = {
  filterByNumericValues: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};
