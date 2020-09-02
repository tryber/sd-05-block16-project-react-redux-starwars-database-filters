import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByNumber } from '../actions/index';

const dropdownSel = [
  'selecione',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'
];

const comparisonSel = [
  'selecione',
  'maior que',
  'menor que',
  'igual a'
];

class FilterByNumber extends React.Component {
  render() {
    const { changeNumber, filterNumber, isFetching } = this.props;
    const columnsFiltered = filterNumber.map((e) => e.column);
    const columnsAvailable = dropdownSel.filter((e) => columnsFiltered.indexOf(e) === -1);

    return (
      <div>
        {!isFetching && (
        <div>
          <select
            data-testid="column-filter"
            onChange={(e) => this.setState({ column: e.target.value })}
          >
            {columnsAvailable.map((options) => (<option>{options}</option>))}
          </select>
          <select
            data-testid="comparison-filter"
            onChange={(e) => this.setState({ comparison: e.target.value })}
          >
            {comparisonSel.map((options) => (<option>{options}</option>))}
          </select>
          <input
            type="number"
            data-testid="value-filter"
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <button data-testid="button-filter" onClick={() => changeNumber(this.state)}>
            Filtrar
          </button>
        </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetReducer.isFetching,
  filterNumber: state.filters.filterByNumericValues,
});

const mapDispatchToProps = {
  changeNumber: filterByNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByNumber);

FilterByNumber.propTypes = {
  isFetching: propTypes.bool.isRequired,
  changeNumber: propTypes.func.isRequired,
  filterNumber: propTypes.arrayOf(propTypes.object).isRequired,
};

