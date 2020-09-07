import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterByNumber } from '../actions/actionFilter';
// import { fetchPlanets } from '../actions/actionApi';

function filterComparison(planets, search) {
  if (search.comparison === 'maior que') {
    return planets.filter((event) => Number(event[search.column]) > Number(search.value));
  }
  if (search.comparison === 'menor que') {
    return planets.filter((event) => Number(event[search.column]) < Number(search.value));
  }
  if (search.comparison === 'igual a') {
    return planets.filter((event) => Number(event[search.column]) === Number(search.value));
  }
  return planets;
}
class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.selectColumn = this.selectColumn.bind(this);
    this.selectComparison = this.selectComparison.bind(this);
    this.selectValue = this.selectValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  selectColumn(e) {
    this.setState({ column: e.target.value });
  }

  selectComparison(e) {
    this.setState({ comparison: e.target.value });
  }

  selectValue(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    const { column, comparison, value } = this.state;
    this.props.filterByNumber(column, comparison, value);
  }

  render() {
    const { filterByNumericValues, results } = this.props;
    const options = ['', 'population', 'surface_water', 'diameter', 'orbital_period', 'rotation_period'];
    let planets = results;
    filterByNumericValues.forEach((filter) => { planets = filterComparison(planets, filter); });
    return (
      <div>
        <select data-testid="column-filter" onChange={(event) => (this.selectColumn(event))}>
          {options.map((element) => <option value={element} key={element}>{element}</option>)}
        </select>
        <select
          data-testid="comparasion-filter"
          onChange={(event) => (this.selectComparison(event))}
        >
          <option value="" disabled selected>Compare</option>
          <option value="maior">Maior que</option>
          <option value="menor">Menor que</option>
          <option value="igual">Igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={(event) => (this.selectValue(event))}
        />
        <button data-testis="button-filter" onClick={this.handleClick}>
          Adicionar Filtro
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
  results: state.apiPlanetReducer.batatinhaResults,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumber: (column, comparison, value) =>
    dispatch(filterByNumber(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNumber);

InputNumber.propTypes = {
  results: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  filterByNumericValues: propTypes.func.isRequired,
  filterByNumber: propTypes.func.isRequired,
};
