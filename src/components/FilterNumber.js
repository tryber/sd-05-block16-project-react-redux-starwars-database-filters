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
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { column, comparison, value } = this.state;
    this.props.filter(column, comparison, value)
  }

  render() {
    return (
      <div>
        <select name="column" onChange={this.handleChange} data-testid="column-filter">
          <option></option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <div>
          <select onChange={this.handleChange} name="comparison" data-testid="comparison-filter">
            <option></option>
            <option value="maior que">Maior que</option>
            <option value="menor que">Menor que</option>
            <option value="igual a">Igual a</option>
          </select>
          <input onChange={this.handleChange} name="value" data-testid="value-filter" type="number" />
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
});

const mapDispatchToProps = (dispatch) => ({
  filter: (column, comparison, value) => dispatch(filterByNumber(column, comparison, value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumber);

