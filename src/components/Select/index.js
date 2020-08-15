import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { querySelector, deleteFilter } from '../../actions';

class Select extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      columnsOptions: [
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDefault = this.handleDefault.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleDefault() {
    const { column, comparison, value } = this.state;
    const { filteredNumbers } = this.props;
    if (column === 'selecione' || comparison === 'selecione' || value === '') {
      alert('Todos os campos são Obrigatórios');
    } else {
      filteredNumbers({ column, comparison, value });
    }
  }

  handleClick(e) {
    const { filters, removeFilter } = this.props;
    const newFilter = [];

    for (let i = 0; i < filters.length; i += 1) {
      if (filters[i].column !== e.target.name) {
        newFilter.push(filters[i]);
      }
    }

    removeFilter(newFilter);
  }

  render() {
    const { columnsOptions } = this.state;
    const { filters } = this.props;
    const optionsValues = ['selecione', 'maior que', 'menor que', 'igual a'];
    const newColumns = [...columnsOptions];
    if (filters.length > 0) {
      filters.forEach((item) => { newColumns.splice(newColumns.indexOf(item.column), 1); });
    }
    return (
      <div>
        <select data-testid="column-filter" name="column" onChange={this.handleChange}>
          {newColumns.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        <select data-testid="comparison-filter" name="comparison" onChange={this.handleChange}>
          {optionsValues.map((values) =>
            <option key={values} value={values}>{values}</option>,
          )}
        </select>
        <input type="number" data-testid="value-filter" name="value" onChange={this.handleChange} />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => this.handleDefault()}
        >
          Buscar
        </button>
        {filters.map((list) =>
          <span key={Math.random(9999999)} data-testid="filter">{`filtrado por: ${list.column} ${list.comparison} ${list.value}`} <button name={list.column} type="button" onClick={this.handleClick}>X</button> </span>,
        )}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filteredNumbers: (e) => dispatch(querySelector(e)),
  removeFilter: (e) => dispatch(deleteFilter(e)),
});


Select.propTypes = {
  filteredNumbers: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
