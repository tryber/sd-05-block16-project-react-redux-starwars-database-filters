import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPlanets } from '../actions/actionApi';
import Cabecalho from './Cabecalho';
import '../App.css';
import Infos from './Infos';

const aplicaComparacao = (planet, filter) => {
  const { column, comparison, value } = filter;
  if (comparison === 'maior que') {
    return Number(planet[column]) > Number(value);
  } else if (comparison === 'menor que') {
    return Number(planet[column]) < Number(value);
  } else if (comparison === 'igual a') {
    return Number(planet[column]) === Number(value);
  } return planet;
};

const numericColumn = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

class Table extends React.Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  ordenaPlaneta(planetas) {
    const { column, sort } = this.props.ordem;
    if (numericColumn.includes(column)) {
      if (sort === 'ASC') {
        return planetas.sort((a, b) => a[column.toLowerCase()] - b[column.toLowerCase()]);
      }
      return planetas.sort((a, b) => b[column.toLowerCase()] - a[column.toLowerCase()]);
    }
    if (sort === 'DESC') {
      return (planetas.sort((a, b) => (a.name < b.name ? -1 : 1)));
    }
    return (planetas.sort((b, a) => (b.name < a.name ? -1 : 1)));
  }

  render() {
    // results e isFetching estão vindo do mapStateToProps
    const { results, isFetching, nombreProcurado, numericFilter } = this.props;
    let planetas = results;
    planetas = results.filter((planeta) =>
      planeta.name.toLowerCase().indexOf(nombreProcurado.toLowerCase()) >= 0);
    numericFilter.forEach((filtro) => {
      planetas = planetas.filter((planeta) => aplicaComparacao(planeta, filtro));
    });
    planetas = this.ordenaPlaneta(planetas);
    return (
      <div>StarWars Datatable with Filters
        <table>
          <Cabecalho />
          {  // if ternário
            isFetching === false ? planetas.map((batatinha) => (
              <Infos batatinha={batatinha} />
            )) : null
          }
        </table>
      </div>
    );
  }
}

// mapStateToProps -> faz o papel do subscribe no redux
// e no React faz o papel do render()

const mapStateToProps = (state) => ({ // é executada toda vez que a store é alterada
  // apiplanetReducer -> reducer/index.js | isFetching -> actions/actionApi.js
  isFetching: state.apiPlanetReducer.isFetching,
  results: state.apiPlanetReducer.batatinhaResults,
  nombreProcurado: state.filters.filterByName.name, // filterByname.
  numericFilter: state.filters.filterByNumericValues,
  ordem: state.filters.order,
}); // o Objeto retornado é uma props acessível no componente Table

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

// currying - conceito de programação funcional
export default connect(mapStateToProps, mapDispatchToProps)(Table);
// o primeiro parâmetro do connect é esperado o mapStateToProps e depois o mapDispatchToProps

Table.propTypes = {
  isFetching: propTypes.bool.isRequired,
  results: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  getPlanets: propTypes.func.isRequired,
  nombreProcurado: propTypes.string.isRequired,
  numericFilter: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  ordem: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
};
