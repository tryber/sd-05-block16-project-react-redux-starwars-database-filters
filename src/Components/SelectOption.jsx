import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectOption extends React.Component {
  constructor(props) {
    super(props);
    this.selectFilter = this.selectFilter.bind(this);
  }

  selectFilter() {
    const { testId, numeric, comparison } = this.props;
    if (testId === 'comparison-filter') return comparison;
    if (testId === 'column-filter') return numeric;
    return [];
  }

  render() {
    const { filterByNumericValues } = this.props;
    return this.selectFilter().map(
      ({ value, text }, index) => !filterByNumericValues
        .some(({ column }) => column === value) && (
        <option value={value} key={`option-item-${index.toString()}`}>
          {text}
        </option>
      ),
    );
  }
}

const mapStateToProps = ({ temporaryFilter: { filtersOptions }, filters }) => ({
  numeric: filtersOptions.numeric,
  comparison: filtersOptions.comparison,
  filterByNumericValues: filters.filterByNumericValues,
});

SelectOption.propTypes = {
  numeric: PropTypes.arrayOf(PropTypes.object).isRequired,
  comparison: PropTypes.arrayOf(PropTypes.object).isRequired,
  testId: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(SelectOption);
