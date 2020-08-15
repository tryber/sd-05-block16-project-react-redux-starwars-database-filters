import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import cleanFilter from '../actions/cleanFilter';

class FilterNumberOptions extends React.Component {
  render() {
    const { click, filterByNumericValues } = this.props;
    return (
      <div>
        {filterByNumericValues.map((e) => (
          <div key={e.column} data-testid="filter">
            <div>{e.column}</div>
            <div>{e.comparison}</div>
            <div>{e.value}</div>
            <button
              type="button"
              onClick={() => click(e.column)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  click: (column) => dispatch(cleanFilter(column)),
});

FilterNumberOptions.propTypes = {
  click: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object),
};

FilterNumberOptions.defaultProps = {
  filterByNumericValues: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumberOptions);
