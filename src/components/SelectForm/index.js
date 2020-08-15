import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues, getPlanets } from '../../actions';
import Select from '../Input';

const optionsColumn = [
  'Coluna',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const optionsComparison = ['Comparação', 'maior que', 'menor que', 'igual a'];

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
      comparisonOptions: ['Comparação', 'maior que', 'menor que', 'igual a'],
      column: '',
      comparison: '',
      value: '',
    };
    this.hC = this.hC.bind(this);
    this.defaultFilter = this.defaultFilter.bind(this);
  }

  hC(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  defaultFilter() {
    const {
      column,
      comparison,
      value,
      columnOptions,
      comparisonOptions,
    } = this.state;
    const { filterNumbers } = this.props;
    if (column === 'Coluna' || comparison === 'Comparação' || value === '') {
      alert('Complete os campos');
    } else {
      filterNumbers({ column, comparison, value });
    }
  }

  render() {
    const { column, comparison, value, columnOptions, comparisonOptions } = this.state;
    const { filters } = this.props;
    let colunas = [...columnOptions];
    if (filters.length > 0) {
      filters.forEach((each) => {
        colunas.splice(colunas.indexOf(each.column), 1);
      });
    }
    return (
      <div>
        <Select name='column' onChange={this.hC} id='column-filter' options={colunas} />
        <Select name='comparison' onChange={this.hC} id='comparison-filter' options={comparisonOptions} />
        <label htmlFor="value">
          <input name="value" type="number" data-testid="value-filter" onChange={this.hC} />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => this.defaultFilter()}
        >
          Filtrar
        </button>
        <p>
          {`Selecionamos a coluna ${column} para comparar o valor ${comparison} ${value}`}{' '}
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterNumbers: (e) => dispatch(filterByNumericValues(e)),
  setPlanets: () => dispatch(getPlanets()),
});

const mapStateToProps = (state) => ({
  planets: state.APIreducer.data,
  loading: state.APIreducer.isFetching,
  NF: state.filters.filterByName.name,
  filters: state.filters.filterByNumericValues,
});

SelectForm.propTypes = {
  filterNumbers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectForm);
