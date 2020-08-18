import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterName, filterByNumeric, replaceFilters } from '../actions';
import Select from './Select';

function handleConst(selectedFilters) {
  const dafaultColumnOpt = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparisonOpt = ['maior que', 'menor que', 'igual a'];
  let columnOpt = dafaultColumnOpt;
  selectedFilters.forEach((filter) => {
    columnOpt = columnOpt.filter((opt) => opt !== filter.column);
    return columnOpt;
  });
  const allV = {};
  return {
    dafaultColumnOpt,
    comparisonOpt,
    columnOpt,
    allV,
  };
}

function Element1(props) {
  const { ch, clic } = props;
  return (
    <div>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ch}
      />
      <button data-testid="button-filter" type="submit" onClick={clic}>
        Filtrar
      </button>
    </div>
  );
}

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(allV) {
    if (allV.column && allV.comparison && allV.num) {
      return this.props.filterByNum(allV.column, allV.comparison, allV.num);
    }
    return false;
  }

  render() {
    const { nameInput, selectedFilters, replaceAll } = this.props;
    const { comparisonOpt, columnOpt, allV } = handleConst(selectedFilters);
    return (
      <div>
        <input data-testid="name-filter" type="text" onChange={(e) => nameInput(e.target.value)} />
        <Select
          dataTestId="column-filter" defaultOpt="Coluna" arrayOpt={columnOpt}
          onChange={(e) => { allV.column = e.target.value; }}
        />
        <Select
          dataTestId="comparison-filter" defaultOpt="Comparacao" arrayOpt={comparisonOpt}
          onChange={(e) => { allV.comparison = e.target.value; }}
        />
        <Element1 ch={(e) => { allV.num = e.target.value; }} clic={() => this.handleClick(allV)} />
        {selectedFilters.map((filter) => (
          <div data-testid="filter">
            <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>
            <button
              type="button"
              onClick={() => replaceAll(selectedFilters.filter((d) => d.column !== filter.column))}
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
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

Element1.propTypes = {
  ch: propTypes.func.isRequired,
  clic: propTypes.func.isRequired,
};
