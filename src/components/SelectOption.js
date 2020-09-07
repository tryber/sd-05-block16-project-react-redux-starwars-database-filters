import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterGeneral } from '../actions';

class SelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
    };
  }
  render() {
    const colunas = ['', 'rotation_period', 'orbital_period', 'diameter', 'surface_water', 'population'];
    return (
      <div>
        <select
          onChange={(event) => this.setState({ column: event.target.value })}
          data-testid="column-filter"
        >
          {colunas.map((value) => <option value={value}>{value}</option>)}
        </select>
        <select
          onChange={(event) =>
            this.setState({ comparison: event.target.value })
          }
          data-testid="comparison-filter"
        >
          <option value="" />
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter" type="number"
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button data-testid="button-filter" onClick={() => this.props.filter(this.state)}>
          CLIQUE AQUI
        </button>
      </div>
    );
  }
}

// Aprendi com o Felipe a forma de colocar o MapDispatch assim
const mapDispatchToProps = {
  filter: filterGeneral,
};

export default connect(null, mapDispatchToProps)(SelectOption);

SelectOption.propTypes = {
  filter: PropTypes.func.isRequired,
};
