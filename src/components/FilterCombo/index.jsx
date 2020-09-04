import React from 'react';
import { connect } from 'react-redux';
import { removeFilter, retornaColumn } from '../../actions';
import './index.css';

const FilterCombo = (props) => {
  const { filterNumeric, remove, retorna } = props;
  function MyFunction({ column }) {
    remove(column);
    retorna(column);
  }
  return (
    <div className="container">
      {filterNumeric.map((filter) => (
        <div
          key={Math.floor(Math.random() * 0x100000)}
          className="row"
          data-testid="filter"
        >
          <p className="row-combo">{filter.column} </p>
          <p className="row-combo">{filter.comparison} </p>
          <p className="row-combo">{filter.value}</p>
          <button
            className="row-button"
            type="button"
            onClick={() => MyFunction(filter)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filterNumeric: state.filters.filterByNumericValues,
});

const mapDispatchToprops = (dispatch) => ({
  remove: (rf) => dispatch(removeFilter(rf)),
  retorna: (rC) => dispatch(retornaColumn(rC)),
});

export default connect(mapStateToProps, mapDispatchToprops)(FilterCombo);
