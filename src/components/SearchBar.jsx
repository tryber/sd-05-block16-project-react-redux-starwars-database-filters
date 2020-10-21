import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterName, filterValues } from '../actions';
import Filter from './Filter';
// solução tirada do repositorio:
// https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/tree/jorge-silva-project-react-redux-starwars-database
const comparacao = ['', 'maior que', 'menor que', 'igual a'];
const colunas = ['', 'population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

function removeC(e = '') {
  if (e === '') return colunas;
  const index = colunas.indexOf(e);
  colunas.splice(index, 1);
  return colunas;
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  render() {
    const { filterV, f_Name } = this.props;
    const { column, comparison, value } = this.state;
    return (<div> <Filter /> Procurar:
        <input
          data-testid="name-filter"
          onChange={(e) => f_Name(e.target.value)} type="text"
        />
      <select
        data-testid="column-filter" onChange={(e) => {
          this.setState({ column: e.target.value });
        }}
      > {colunas.map((i) => (<option>{i}</option>))} </select>
      <select
        onChange={(e) => {
          this.setState({ comparison: e.target.value });
        }}
        data-testid="comparison-filter"
      > {comparacao.map((j) => (<option>{j}</option>))} </select>
      <input
        type="number" data-testid="value-filter"
        onChange={(e) => {
          this.setState({ value: e.target.value });
        }}
      />
      <button
        onClick={() => {
          filterV(column, comparison, value);
          removeC(column);
        }} data-testid="button-filter"
      > Filtrar </button> </div>);
  }
}
// exportação dos estados
const mapDispatchToProps = (dispatch) => ({
  f_Name: (name) => dispatch(filterName(name)),
  filterV: (name1, name2, name3) => dispatch(filterValues(name1, name2, name3)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
// definição dos tipos de cara referencia
SearchBar.propTypes = {
  f_Name: PropTypes.func.isRequired,
  filterV: PropTypes.func.isRequired,
};
