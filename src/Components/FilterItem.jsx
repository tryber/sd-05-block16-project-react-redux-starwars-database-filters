import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RemoveFilterButton from './RemoveFilterButton';

class Item extends Component {
  render() {
    const {
      item: { column, comparison, value },
      index,
      columnValues,
      numericValues,
    } = this.props;
    const comparisonText = columnValues.find((item) => item.value === comparison);
    const columText = numericValues.find((item) => item.value === column);
    return (
      <li className="filter-item-container" data-testid="filter" key={index}>
        <RemoveFilterButton filterIndex={index} column={columText.value} />
        <span className="filter-item-column">{columText.text}</span>
        <span className="filter-item-comparison">{comparisonText.text}</span>
        <span className="filter-item-value">{value}</span>
      </li>
    );
  }
}

const mapStateToProps = ({ temporaryFilter: { filtersOptions } }) => ({
  columnValues: filtersOptions.comparison,
  numericValues: filtersOptions.numeric,
});

export default connect(mapStateToProps)(Item);

Item.propTypes = {
  item: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  columnValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};
