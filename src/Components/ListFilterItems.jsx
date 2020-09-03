import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from './FilterItem';

class FilterListItems extends Component {
  render() {
    const { filterByNumericValues } = this.props;
    return filterByNumericValues.map((item, index) => (
      <Item item={item} index={index} key={index.toString()} />
    ));
  }
}

const mapStateToProps = ({ filters: { filterByNumericValues } }) => ({
  filterByNumericValues,
});

export default connect(mapStateToProps)(FilterListItems);

FilterListItems.propTypes = {
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
