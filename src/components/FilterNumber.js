import React from 'react';
import { connect } from 'react-redux';

import filterByNumber from '../actions/filterByNumericValues';

class FilterNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filter = this.filter.bind(this);
  }

  filter() {
    const { filterByNumericValues, data } = this.props;
    return filterByNumericValues.forEach(filtro => {
      if (filtro.comparison === 'maior que') {
        return data.filter(e => e[filtro.column] > filtro.value);
      }
      if (filtro.comparison === 'menor que') {
        return data.filter(e => e[filtro.column] < filtro.value);
      }
      if (filtro.comparison === 'igual a') {
        return data.filter(e => e[filtro.column] === filtro.value);
      }
    })
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { column, comparison, value } = this.state;
    this.props.filter(column, comparison, value);
    console.log(this.filter());
  }

  render() {
    const { handleChange } = this;
    const { columnOptions } = this.props;
    return (
      <div>
        <select name="column" onChange={handleChange} data-testid="column-filter">
          {columnOptions.map((e, index) => <option key={index} value={e}>{e}</option>)}
        </select>
        <div>
          <select onChange={handleChange} name="comparison" data-testid="comparison-filter">
            <option />
            <option value="maior que">Maior que</option>
            <option value="menor que">Menor que</option>
            <option value="igual a">Igual a</option>
          </select>
          <input onChange={handleChange} name="value" data-testid="value-filter" type="number" />
          <button
            type="button" data-testid="button-filter" onClick={this.handleClick}
          >
            Filtrar
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.getPlanets.error,
  isFetching: state.getPlanets.isFetching,
  data: state.getPlanets.data.results,
  columnOptions: state.filter.columnOptions,
  filterByNumericValues: state.filter.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filter: (column, comparison, value) => dispatch(filterByNumber(column, comparison, value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumber);

