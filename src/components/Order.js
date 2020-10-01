import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ordenarFilter } from '../actions/index';

const menu = [
  'selecione',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
  }
  render() {
    const { fOrder } = this.props;
    return (
      <div>
        <select
          data-testid="column-sort"
          onChange={(e) => this.setState({ column: e.target.value })}
        >
          {menu.map((escolha) => (
            <option value={escolha} key={escolha}>
              {escolha}
            </option>
          ))}
        </select>
        <input
          value="ASC"
          type="radio"
          data-testid="column-sort-input"
          onChange={(e) => this.setState({ sort: e.target.value })}
        />
        <button type="button" data-testid="column-sort-button" onClick={() => fOrder(this.state)}>
          Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = { fOrder: ordenarFilter };

export default connect(mapDispatchToProps)(Order);

Order.propTypes = {
  fOrder: propTypes.func.isRequired,
};
