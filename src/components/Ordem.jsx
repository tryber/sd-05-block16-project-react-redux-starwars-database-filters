import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ordenar } from '../actions';

const nomeColunas = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'residents',
  'films',
  'created',
  'edited',
];

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: '',
      column: '',
    };
  }
  render() {
    const { orderC } = this.props;
    const { order, column } = this.state;
    return (
      <div>
        <select
          data-testid="column-sort"
          onChange={(e) => this.setState({ column: e.target.value })}
        > {nomeColunas.map((item) => (<option>{item}</option>))}
        </select>
        <input
          data-testid="column-sort-input"
          id="ASC"
          type="radio"
          value="ASC"
          name="order"
          onChange={(e) => this.setState({ order: e.target.value })}
        /> <label htmlFor="ASC">ASC</label>
        <input
          id="DESC"
          data-testid="column-sort-input"
          type="radio"
          value="DESC"
          name="order"
          onChange={(e) => this.setState({ order: e.target.value })}
        /> <label htmlFor="DESC">DESC</label>
        <button
          data-testid="column-sort-button"
          onClick={() => orderC(order, column)}
        >
          Filtrar </button> </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  orderC: (order, column) => dispatch(ordenar(order, column)),
});

export default connect(null, mapDispatchToProps)(Order);

Order.propTypes = {
  orderC: PropTypes.func.isRequired,
};
