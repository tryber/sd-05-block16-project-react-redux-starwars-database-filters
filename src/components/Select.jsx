import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumbers } from '../actions';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
      columnFilter: [
        '',
        'rotation_period',
        'orbital_period',
        'diameter',
        'surface_water',
        'population',
      ],
    };
    this.HandleClick = this.HandleClick.bind(this);
    this.ComparisonFilter = this.ComparisonFilter.bind(this);
    this.ValueFilter = this.ValueFilter.bind(this);
  }

  ComparisonFilter(event) {
    this.setState({ comparison: event.target.value });
  }

  ValueFilter(event) {
    this.setState({ value: event.target.value });
  }

  HandleClick() {
    const { filters } = this.props;
    const { column, comparison, value } = this.state;
    filters({ column, comparison, value });
  }

  render() {
    const { filtered } = this.props;
    const { columnFilter } = this.state;
    const columns = [...columnFilter];
    if (filtered.length > 0) {
      filtered.forEach((filter) => {
        columns.splice(columns.indexOf(filter.column), 1);
      });
    }
    return (
      <div>
        <select
          data-testid="column-filter"
          onChange={(event) => this.setState({ column: event.target.value })}
        >
          {columns.map((value) => (<option key={value} value={value}>{value}</option>))}
        </select>
        <select data-testid="comparison-filter" onChange={this.ComparisonFilter} >
          <option value="comparison">comparison</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input data-testid="value-filter" type="number" onChange={this.ValueFilter} />
        <button data-testid="button-filter" onClick={this.HandleClick}>Filter</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filtered: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filters: (filter) => dispatch(filterByNumbers(filter)),
}); // alterado pois método anterior não passava requisito 4

export default connect(mapStateToProps, mapDispatchToProps)(Select);

Select.propTypes = {
  filters: PropTypes.func.isRequired,
  filtered: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/* Refatoração do código para caber nas 30 linhas no Render. criado novo state com array
com as propriedades para alterar na coluna. criado columns com spread para retornar o valor
do state array. criado if que remove o option especificado no requisito se > 0
e feito map para refatorar o column-filter.
*/
