import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByName,
  filterByColumn,
  filterByComparison,
  filterByValue,
  filterByNumbers,
} from '../actions/filterPlanets';

class Filters extends Component {
  renderNameInput() {
    const { filterName } = this.props;

    return (
      <section>
        <input
          data-testid="name-filter"
          type="text"
          name="filter-name"
          onChange={(event) => filterName(event.target.value)}
          placeholder="Search planet by name"
        />
      </section>
    );
  }

  renderButton() {
    const { column, comparison, value, filterNumbers } = this.props;

    return (
      <button
        data-testid="button-filter" type="button"
        onClick={() => filterNumbers(column, comparison, value)}
      >
        Find Planet
      </button>
    );
  }

  renderValueInput() {
    const { filterColumn, filterComparison, filterValue } = this.props;

    return (
      <section>
        <select data-testid="column-filter" onChange={(event) => filterColumn(event.target.value)}>
          <option hidden disabled selected value> -- select an option -- </option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={(event) => filterComparison(event.target.value)}
        >
          <option hidden disabled selected value> -- select an option -- </option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <input
          data-testid="value-filter" type="number"
          onChange={(event) => filterValue(event.target.value)}
        />
      </section>
    );
  }

  render() {
    return (
      <section>
        {this.renderNameInput()}
        {this.renderValueInput()}
        {this.renderButton()}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  column: state.filters.numericValues.column,
  comparison: state.filters.numericValues.comparison,
  value: state.filters.numericValues.value,
});

const mapDispatchToProps = {
  filterName: filterByName,
  filterColumn: filterByColumn,
  filterComparison: filterByComparison,
  filterValue: filterByValue,
  filterNumbers: filterByNumbers,
};

Filters.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  filterName: PropTypes.func.isRequired,
  filterColumn: PropTypes.func.isRequired,
  filterComparison: PropTypes.func.isRequired,
  filterValue: PropTypes.func.isRequired,
  filterNumbers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
