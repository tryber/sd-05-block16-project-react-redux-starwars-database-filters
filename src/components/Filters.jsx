import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { rKey } from '../services/Utils';
import {
  filterByName,
  filterByNumericValues,
  removeFilterByIndex,
} from '../actionsCreator';

const columns = [
  { innerText: 'Coluna', value: 'Coluna' },
  { innerText: 'population', value: 'population' },
  { innerText: 'orbital_period', value: 'orbital_period' },
  { innerText: 'diameter', value: 'diameter' },
  { innerText: 'rotation_period', value: 'rotation_period' },
  { innerText: 'surface_water', value: 'surface_water' },
];

const comparisons = [
  { innerText: 'Comparação', value: 'Comparação' },
  { innerText: 'maior que', value: 'maior que' },
  { innerText: 'menor que', value: 'menor que' },
  { innerText: 'igual a', value: 'igual a' },
];

function Select(props) {
  const { options, dataTest, selected } = props;
  return (
    <select
      data-testid={dataTest}
      onChange={({ target }) => { selected(target.value); }}
    >
      {
        options.map(({ value, innerText }) => (
          <option key={rKey(value)} value={value}>{innerText}</option>
        ))
      }
    </select>
  );
}

function ActivatedFilters(props) {
  const { numberFilters, removeFilter } = props;
  return (
    <div>
      <h4>Filtros</h4>
      {
        numberFilters.map(({ column, comparison, value }, i) => (
          <p key={rKey(column)} data-testid="filter">
            {`${column} ${comparison} ${value}`}
            <button
              type="button"
              onClick={() => { removeFilter(i); }}
            >
              X
            </button>
          </p>
        ))
      }
    </div>
  );
}

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { column: '', comparison: '', value: '' };
    this.RenderSelects = this.RenderSelects.bind(this);
  }

  RenderSelects() {
    const { numberFilters } = this.props;
    return (
      <div>
        <Select
          options={
            columns.filter(({ value }) =>
              (numberFilters.filter(({ column }) => (column === value)).length === 0),
            )
          }
          dataTest="column-filter"
          selected={(res) => { this.setState({ column: res }); }}
        />
        <Select
          options={comparisons}
          dataTest="comparison-filter"
          selected={(res) => { this.setState({ comparison: res }); }}
        />
        <input
          data-testid="value-filter"
          type="number"
          onChange={({ target }) => { this.setState({ value: target.value }); }}
        />
      </div>
    );
  }

  render() {
    const { setFilterByName, addFilterByNumericValues, numberFilters, removeFilter } = this.props;
    return (
      <div>
        <div>Header</div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={({ target }) => { setFilterByName(target.value); }}
        />
        {this.RenderSelects()}
        <button
          data-testid="button-filter"
          type="button"
          onClick={() => { addFilterByNumericValues(this.state); }}
        >
          Filtrar
        </button>
        <ActivatedFilters numberFilters={numberFilters} removeFilter={removeFilter} />
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({ numberFilters: filters.filterByNumericValues });
const mapDispatchToProps = (dispatch) => (
  {
    setFilterByName: (name) => { dispatch(filterByName(name)); },
    addFilterByNumericValues: ({ column, comparison, value }) => {
      dispatch(filterByNumericValues({ column, comparison, value }));
    },
    removeFilter: (index) => {
      dispatch(removeFilterByIndex(index));
    },
  }
);

Filters.propTypes = {
  setFilterByName: propTypes.func.isRequired,
  addFilterByNumericValues: propTypes.func.isRequired,
  removeFilter: propTypes.func.isRequired,
  numberFilters: propTypes.arrayOf(propTypes.object).isRequired,
};

ActivatedFilters.propTypes = {
  numberFilters: propTypes.arrayOf(propTypes.object).isRequired,
  removeFilter: propTypes.func.isRequired,
};

Select.propTypes = {
  options: propTypes.arrayOf(propTypes.object),
  dataTest: propTypes.string,
  selected: propTypes.func,
};

Select.defaultProps = {
  options: [],
  dataTest: 'column-filter',
  selected: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
