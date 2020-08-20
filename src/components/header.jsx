import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName, filterByNumericValues } from '../actions';

const colunas = [
  ['COLUNAS'],
  ['population'],
  ['orbital_period'],
  ['diameter'],
  ['rotation_period'],
  ['surface_water'],
];

const comparação = [
  ['COMPARAÇÃO'],
  ['maior que'],
  ['igual a'],
  ['menor que'],
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: [],
      comparison: [],
      value: [],
    };
    this.trocarState = this.trocarState.bind(this);
  }

  trocarState(event) {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  filterValues() {
    return (
      <div>
        <div>
          <select
            data-testid="column-filter" type="ComboBox"
            name="column" onChange={this.trocarState}
          >
            {colunas.map((value) => <option key={value}>{value}</option>)}
          </select>
          <select
            data-testid="comparison-filter" type="ComboBox"
            name="comparison" onChange={this.trocarState}
          >
            {comparação.map((value) => <option key={value}>{value}</option>)}
          </select>
        </div>
        <div>
          <input
            data-testid="value-filter" type="number" name="value"
            onChange={this.trocarState}
          />
        </div>
        <button
          data-testid="button-filter" onClick={() =>
          this.props.filterByNumericValues(this.state.column,
          this.state.comparison, this.state.value)}
        >Filtrar</button>
      </div>
    );
  }

  render() {
    return (
      <div className="header">
        <div>
          <p>Procurar pelo nome:</p>
          <input
            data-testid="name-filter" type="text" name="name-filter"
            onChange={(event) => { this.props.filterByName(event.target.value); }}
          />
        </div>
        <div>
          {this.filterValues()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
  filterByNumericValues: (column, comparison, value) =>
  dispatch(filterByNumericValues(column, comparison, value)),
});

Header.propTypes = {
  filterByName: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
