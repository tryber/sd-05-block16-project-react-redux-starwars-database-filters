import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByNumber, deleteFilter } from '../actions/index';

const comparisonSel = [
  'selecione',
  'maior que',
  'menor que',
  'igual a',
];

class FilterByNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownSel: [
        'selecione',
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ],
      column: '',
      comparison: '',
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDefault = this.handleDefault.bind(this);
  }

  handleDefault() {
    const { changeNumber } = this.props;
    const { column, comparison, value } = this.state;
    if (column === 'selecione' || comparison === 'selecione' || value === '') {
      alert('Todos os campos são obrigatórios');
    } else {
      changeNumber({ column, comparison, value });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    const { filterNumber, deleteFilter } = this.props;
    const cleanedFilter = [];
    for (let i = 0; i < filterNumber.length; i += 1) {
      if (filterNumber[i].column !== e.target.name) {
        cleanedFilter.push(filterNumber[i]);
      }
    }
    deleteFilter(cleanedFilter);
  }

  render() {
    const { dropdownSel } = this.state;
    const { changeNumber, filterNumber } = this.props;
    // const columnsFiltered = filterNumber.map((e) => e.column);
    const columnsFiltered = [...dropdownSel];
    if (filterNumber.length > 0) {
      filterNumber.forEach((item) => {columnsFiltered.splice(columnsFiltered.indexOf(item.column), 1);
      });
    }

    // const columnsAvailable = dropdownSel.filter((e) => columnsFiltered.indexOf(e) === -1);
    console.log(columnsFiltered);

    return (
      <div>
        <select
          name="column"
          data-testid="column-filter"
          onChange={this.handleChange}
        >
          {columnsFiltered.map((options) => (<option value={options}>{options}</option>))}
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={this.handleChange}
        >
          {comparisonSel.map((options) => (<option value={options}>{options}</option>))}
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={this.handleChange}
        />
        <button data-testid="button-filter" onClick={() => this.handleDefault()}>
          Filtrar
        </button>
        {filterNumber.map((listParams) => 
          <span data-testid="filter">
            {`${listParams.column} ${listParams.comparison} ${listParams.value}`}
            <button 
              name={listParams.column}
              onClick={this.handleClick}
            >
              X
            </button>
          </span>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // isFetching: state.planetReducer.isFetching,
  filterNumber: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  changeNumber: (e) => dispatch(filterByNumber(e)),
  deleteFilter: (e) => dispatch(deleteFilter(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterByNumber);

FilterByNumber.propTypes = {
  // isFetching: propTypes.bool.isRequired,
  changeNumber: propTypes.func.isRequired,
  filterNumber: propTypes.arrayOf(propTypes.object).isRequired,
};

