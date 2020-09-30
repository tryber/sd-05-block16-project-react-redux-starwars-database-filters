import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectButton from './SelectButton';
import { columnAddedOrder, orderAdded, filterOrder } from '../actions/columnSelectOrder';
import RadioInput from './RadioInput';

const order = ['ASC', 'DESC'];
const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  'name', 'climate', 'gravity', 'terrain', 'created', 'edited', 'films', 'url'];

const OrderFilter = ({ onChangeColumn, onChangeOrder,
  orderSelected, optionSelected, orderFilter }) => (
  <div>
    <SelectButton
      datatestid="column-sort"
      options={columns}
      onChange={onChangeColumn}
      optionSelected={optionSelected}
    />
    <RadioInput
      datatestid="column-sort-input"
      options={order}
      onChange={onChangeOrder}
      orderSelected={orderSelected}
    />
    <button onClick={orderFilter} data-testid="column-sort-button" >Filtrar</button>
  </div>
);

const mapStateToProps = (state) => ({
  optionSelected: state.filters.order.column,
  orderSelected: state.filters.order.sort,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeColumn: ({ target: { value } }) => dispatch(columnAddedOrder(value)),
  onChangeOrder: ({ target: { value } }) => dispatch(orderAdded(value)),
  orderFilter: () => dispatch(filterOrder()),
});

OrderFilter.propTypes = {
  optionSelected: PropTypes.string.isRequired,
  orderSelected: PropTypes.string.isRequired,
  onChangeColumn: PropTypes.func.isRequired,
  onChangeOrder: PropTypes.func.isRequired,
  orderFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderFilter);
