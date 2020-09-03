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
    const { orderFilter } = this.props;
    return (
      <div>
        <select data-testid="column-sort" onChange={(e) => this.setState({column: e.target.value})}>
          {dropdownSel.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
        <label>ASC</label>
        <input
          name="ordenar"
          value="ASC" 
          type="radio"
          data-testid="column-sort-input"
          onChange={(e) => this.setState({sort: e.target.value})}
        />
        <label>DESC</label>
        <input
          name="ordenar"
          value="DESC"
          type="radio"
          data-testid="column-sort-input"
          onChange={(e) => this.setState({sort: e.target.value})}
        />
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={() => orderFilter(this.state)}
        >
          Filtrar
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {orderFilter: sortFilter};

export default connect(null, mapDispatchToProps)(OrderPlanets);

OrderPlanets.propTypes = {
  orderFilter: proptypes.func.isRequired,
};
