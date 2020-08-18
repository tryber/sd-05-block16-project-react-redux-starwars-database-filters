import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterName, filterByNumeric, replaceFilters } from '../actions';
import Select from './Select';

function FilterBar(props) {
  const { nameInput, selectedFilters, replaceAll } = props;
  const dafaultColumnOpt = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparisonOpt = ['maior que', 'menor que', 'igual a'];
  const allV = {};
  let columnOpt = dafaultColumnOpt;
  selectedFilters.forEach((filter) => {
    columnOpt = columnOpt.filter((opt) => opt !== filter.column);
    return columnOpt;
  });

  return (
    <div>
      <input data-testid="name-filter" type="text" name="name-filter" onChange={(e) => nameInput(e.target.value)} />
      <Select
        dataTestId="column-filter"
        defaultOpt="Coluna"
        arrayOpt={columnOpt}
        onChange={(e) => { allV.column = e.target.value; }}
      />
      <Select
        dataTestId="comparison-filter"
        defaultOpt="Comparacao"
        arrayOpt={comparisonOpt}
        onChange={(e) => { allV.comparison = e.target.value; }}
      />
      <input required type="number" data-testid="value-filter" onChange={(e) => { allV.num = e.target.value; }} />
      <button
        data-testid="button-filter"
        type="submit"
        onClick={() => {
          if (allV.column && allV.comparison && allV.num) props.filterByNum(allV.column, allV.comparison, allV.num);
        }}
      >
        Filtrar
      </button>
      {selectedFilters.map((filter) => (
        <div data-testid="filter">
          <label>{`${filter.column} ${filter.comparison} ${filter.value}`}</label>
          <button type="button" onClick={() => replaceAll(selectedFilters.filter((d) => d.column !== filter.column))}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  nameInput: (inputText) => dispatch(filterName(inputText)),
  filterByNum: (column, comparison, value) => dispatch(filterByNumeric(column, comparison, value)),
  replaceAll: (payload) => dispatch(replaceFilters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);

FilterBar.propTypes = {
  nameInput: propTypes.func.isRequired,
  filterByNum: propTypes.func.isRequired,
  selectedFilters: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  replaceAll: propTypes.func.isRequired,
};
