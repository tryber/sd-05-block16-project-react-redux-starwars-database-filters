import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    return (
      <div>
        <select
          onChange={(event) => this.setState({ column: event.target.value })}
          data-testid="column-filter"
        >
          <option value="" />
          <option value="rotation_period">rotation_period</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="surface_water">surface_water</option>
          <option value="population">population</option>
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
