import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeFilter } from '../../actions';

import './style.css';

const ActiveFilters = ({ activeFilters, removeActiveFilter }) => (
  <div>
    {activeFilters.map((filter) => (
      <div className="activeFilter" data-testid="filter" key={filter.column}>
        {`${filter.column} ${filter.comparison} ${filter.value}`}
        <button type="button" onClick={() => removeActiveFilter(filter.column)}>
          x
        </button>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  activeFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = { removeActiveFilter: removeFilter };

export default connect(mapStateToProps, mapDispatchToProps)(ActiveFilters);

ActiveFilters.propTypes = {
  activeFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeActiveFilter: PropTypes.func.isRequired,
};
