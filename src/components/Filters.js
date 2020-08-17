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

  renderValueInput() {
    const { numbers, filterColumn, filterComparison, filterValue } = this.props;

    // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
    const columnOptions = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']
      .filter((option) => !numbers.map((filter) => filter.column)
      .includes(option));

    return (
      <section>
        <select data-testid="column-filter" onChange={(event) => filterColumn(event.target.value)}>
          <option hidden disabled selected value> -- select an option -- </option>
          {columnOptions.map((options) => <option key={options} value={options}>{options}</option>)}
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
  numbers: state.filters.filterByNumericValues,
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
  numbers: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.func.isRequired,
  filterColumn: PropTypes.func.isRequired,
  filterComparison: PropTypes.func.isRequired,
  filterValue: PropTypes.func.isRequired,
  filterNumbers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
