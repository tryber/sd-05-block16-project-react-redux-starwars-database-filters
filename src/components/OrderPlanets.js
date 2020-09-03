import React, { Component } from 'react';
import { connect } from 'react-redux';
import proptypes from 'prop-types';
import { sortFilter } from '../actions';

// Referência: ajuda Anderson Godoy e Felipe Vieira

const dropdownSel = [
  'selecione',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class OrderPlanets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
  }

  render() {
    const { ordFilt } = this.props;
    return (
      <div>
        <select
          data-testid="column-sort"
          onChange={(e) => this.setState({ column: e.target.value })}
        >
          {dropdownSel.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
        <label htmlFor="ASC">ASC</label>
        <input
          name="ordenar"
          value="ASC"
          type="radio"
          data-testid="column-sort-input"
          onChange={(e) => this.setState({ sort: e.target.value })}
        />
        <label htmlFor="DESC">DESC</label>
        <input
          name="ordenar"
          value="DESC"
          type="radio"
          data-testid="column-sort-input"
          onChange={(e) => this.setState({ sort: e.target.value })}
        />
        <button type="button" data-testid="column-sort-button" onClick={() => ordFilt(this.state)}>
          Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = { ordFilt: sortFilter };

export default connect(null, mapDispatchToProps)(OrderPlanets);

OrderPlanets.propTypes = {
  ordFilt: proptypes.func.isRequired,
};
