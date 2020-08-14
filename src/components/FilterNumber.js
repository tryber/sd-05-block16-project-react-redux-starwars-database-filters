import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { column, comparison, value } = this.state;
    this.props.filter(column, comparison, value);
  }

  render() {
    const { handleChange } = this;
    const columnOptions = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const usedColumns = this.props.filterByNumericValues.map((e) => e.column);
    const availableColumns = columnOptions.filter((e) => usedColumns.indexOf(e) === -1);
    return (
      <div>
        <select name="column" onChange={handleChange} value={this.state.column} data-testid="column-filter">
          {availableColumns.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <div>
          <select onChange={handleChange} name="comparison" data-testid="comparison-filter">
            <option />
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
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

FilterNumber.propTypes = {
  columnOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.func.isRequired,
};

FilterNumber.defaultProps = {
  filterByNumericValues: [],
};

const mapStateToProps = (state) => ({
  error: state.getPlanets.error,
  isFetching: state.getPlanets.isFetching,
  data: state.getPlanets.data.results,
  columnOptions: state.filters.columnOptions,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filter: (column, comparison, value) => dispatch(filterByNumber(column, comparison, value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumber);

