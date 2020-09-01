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
    const { testId } = this.props;
    return this.selectFilter(testId).map(
      ({ value, text }, index) => (
        <option value={value} key={`option-item-${index.toString}`}>
          {text}
        </option>
      ),
    );
  }
}

SelectOption.propTypes = {
  option: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ filterReducer: { filtersOptions } }) => ({
  numeric: filtersOptions.numeric,
  comparison: filtersOptions.comparison,
});

SelectOption.propTypes = {
  numeric: PropTypes.arrayOf(PropTypes.string).isRequired,
  comparison: PropTypes.arrayOf(PropTypes.string).isRequired,
  testId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(SelectOption);
