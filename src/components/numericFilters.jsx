import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { pegandoNumerosAction } from '../actions';

class NumericFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column: '',
      comparison: '',
      value: '',
    }
  }
  render() {
    return (
      <div>
        <select data-testid="column-filter" onChange={(event) => this.setState({column: event.target.value})}>
          <option value="">Choose your column</option>
          <option value="population">population</option>
          <option value="diameter">diameter</option>
          <option value="orbital_period">orbital_period</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" onChange={(event) => this.setState({comparison: event.target.value})}>
          <option value="">Choose your comparison</option>
          <option value="menor que">menor que</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" data-testid="value-filter" onChange={(event) => this.setState({value: event.target.value})} />
        <button data-testid="button-filter" onClick={() => this.props.pegarNumero(this.state)}>Acionar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  pegarNumero: (filter) =>
    dispatch(pegandoNumerosAction(filter)),
});

export default connect(null, mapDispatchToProps)(NumericFilter);

/* NumericFilter.propTypes = {
  pegar: propTypes.func.isRequired,
}; */
