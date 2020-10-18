import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateOrderColumn, updateOrderSort, updateOrderFilter } from '../actions/index';

const colunas = [
  'name',
  'rotation_period',
  'orbital_period',
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

const renderButtons = (orderSort) => (
  <div>
    <label htmlFor="asc">
      ASC
      <input
        name="order"
        type="radio"
        data-testid="column-sort-input"
        value="ASC"
        defaultChecked
        onChange={(event) => orderSort(event.target.value)}
      />
    </label>
    <label htmlFor="desc">
      DESC
      <input
        name="order"
        type="radio"
        data-testid="column-sort-input"
        value="DESC"
        onChange={(event) => orderSort(event.target.value)}
      />
    </label>
  </div>
);

const Order = ({ orderColumn, orderSort, orderFilter, column, sort }) => (
  <div>
    Ordem
    <select data-testid="column-sort" onChange={(event) => orderColumn(event.target.value)}>
      {colunas.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {renderButtons(orderSort)}
    <button
      type="button"
      data-testid="column-sort-button"
      onClick={() => orderFilter({ column, sort })}
    >
      Filtrar
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  column: state.sortReducer.column,
  sort: state.sortReducer.sort,
});

const mapDispatchToProps = (dispatch) => ({
  orderColumn: (resultado) => dispatch(updateOrderColumn(resultado)),
  orderSort: (resultado) => dispatch(updateOrderSort(resultado)),
  orderFilter: (resultado) => dispatch(updateOrderFilter(resultado)),
});

Order.propTypes = {
  orderColumn: PropTypes.func.isRequired,
  orderSort: PropTypes.func.isRequired,
  orderFilter: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
