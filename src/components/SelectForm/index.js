import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues, removeFilter } from '../../actions';
import Select from '../Input';


class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnOptions: [
        'Coluna',
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ],
      CO: ['Comparação', 'maior que', 'menor que', 'igual a'],
      column: '',
      comparison: '',
      value: '',
    };
    this.hC = this.hC.bind(this);
    this.defaultFilter = this.defaultFilter.bind(this);
    this.hClick = this.hClick.bind(this);
  }

  hC(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  hClick(e) {
    const { filters, deleteFilter } = this.props;
    const newFilter = [];
    for (let i = 0; i < filters.length; i += 1) {
      if (filters[i].column !== e.target.name) {
        newFilter.push(filters[i]);
      }
    }
    deleteFilter(newFilter);
  }

  defaultFilter() {
    const {
      column,
      comparison,
      value,
    } = this.state;
    const { filterNumbers } = this.props;
    if (column === 'Coluna' || comparison === 'Comparação' || value === '') {
      alert('Complete os campos');
    } else {
      filterNumbers({ column, comparison, value });
    }
  }

  render() {
    const { columnOptions, CO } = this.state;
    const { filters } = this.props;
    const colunas = [...columnOptions];
    if (filters.length > 0) {
      filters.forEach((each) => {
        colunas.splice(colunas.indexOf(each.column), 1);
      });
    }
    return (
      <div>
        <Select name="column" onChange={this.hC} id="column-filter" options={colunas} />
        <Select name="comparison" onChange={this.hC} id="comparison-filter" options={CO} />
        <label htmlFor="value">
          <input name="value" type="number" data-testid="value-filter" onChange={this.hC} />
        </label>
        <button type="button" data-testid="button-filter" onClick={() => this.defaultFilter()}>
          Filtrar
        </button>
        <div>
          {filters.map((each) =>
            <span key={each.column} data-testid="filter">{`Filtrando ${each.column} ${each.comparison} ${each.value}`} <button name={each.column} type="button" onClick={this.hClick}>X</button></span>,
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterNumbers: (e) => dispatch(filterByNumericValues(e)),
  deleteFilter: (e) => dispatch(removeFilter(e)),
});

const mapStateToProps = (state) => ({
  planets: state.APIreducer.data,
  loading: state.APIreducer.isFetching,
  NF: state.filters.filterByName.name,
  filters: state.filters.filterByNumericValues,
});

SelectForm.propTypes = {
  filterNumbers: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectForm);
