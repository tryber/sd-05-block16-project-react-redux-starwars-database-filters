import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanetsByNumericValue } from '../actions';

const dropDownOptions = [
  'selecione',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function selectedDropDownOptions(filterByNumericValues) {
  return filterByNumericValues.map((filter) => filter.column);
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.comparisonOptions = this.comparisonOptions.bind(this);
  }

  comparisonOptions() {
    return (
      <select
        data-testid="comparison-filter"
        onChange={(event) => this.setState({ comparison: event.target.value })}
      >
        <option>Selecione</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    );
  }

  render() {
    const { filterByNumericValues, numericValueFilter } = this.props;
    return (
      <form>
        <select
          data-testid="column-filter"
          onChange={(event) => this.setState({ column: event.target.value })}
        >
          {dropDownOptions.map((option) => {
            if (!selectedDropDownOptions(filterByNumericValues).includes(option)) {
              return <option value={option}>{option}</option>;
            }
            return null;
          })}
        </select>
        {this.comparisonOptions()}
        <label htmlFor="value-input">Valor:</label>
        <input
          type="number" data-testid="value-filter" id="value-input"
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button
          data-testid="button-filter" type="button"
          onClick={() => numericValueFilter(this.state)}
        > Filtrar </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  numericValueFilter: (filterParams) => dispatch(filterPlanetsByNumericValue(filterParams)),
});

Form.propTypes = {
  numericValueFilter: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
