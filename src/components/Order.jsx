import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterSort } from '../actions';
import InputRadio from './InputRadio';

const columns = [
  'name',
  'orbital Period',
  'rotation Period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
    };
    this.columnClick = this.columnClick.bind(this);
    this.radioClick = this.radioClick.bind(this);
    this.orderClick = this.orderClick.bind(this);
  }

  columnClick(event) {
    this.setState({ column: event.target.value });
  }

  radioClick(event) {
    this.setState({ sort: event.target.value });
  }

  orderClick() {
    const { order } = this.props;
    order(this.state);
  }

  render() {
    const { column } = this.state;
    return (
      <div>
        <h3>Ordem</h3>
        <select data-testid="column-sort" value={column} onChange={this.columnClick}>
          {columns.map((element) => <option>{element}</option>)}
        </select>
        <label htmlFor="ASC">ASC</label>
        <InputRadio id="ASC" value="ASC" onClick={this.radioClick} />
        <label htmlFor="DESC">DESC</label>
        <InputRadio id="DESC" value="DESC" onClick={this.radioClick} />
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={this.orderClick}
        >
          Ordenar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  order: (column, sort) => dispatch(filterSort(column, sort)),
});

export default connect(null, mapDispatchToProps)(Order);

Order.propTypes = {
  order: PropTypes.func.isRequired,
};
