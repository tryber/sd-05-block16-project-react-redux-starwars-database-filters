import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAPIStarWarsPlanets from '../actions/action';
import Headers from './HeaderTabela';
import FiltrosDaPagina from './HeaderPagina';

class Table extends React.Component {
  /*
    componentDidMount,quando montado, toda vez que o
    componente é renderizado é feita umaChamada na API.
  */
  componentDidMount() {
    const { StarWarsPlanetsAPI } = this.props;
    StarWarsPlanetsAPI();
  }

  renderTable() {
    const { data } = this.props;
    console.log(data);

    return data.map((planet) => (
      <tr>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>
    ));
  }

  render() {
    const { fazendoRequisicao } = this.props;
    // console.log('table', this.props);
    return (
      <div>
        <div>
          <FiltrosDaPagina />
        </div>
        <table>
          <Headers />
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
        {fazendoRequisicao && 'Loading...'}
      </div>
    );
  }
}

/*
  {fazendoRequisicao && 'Loading...'} enquanto fazendoRequisicao
  for true, o texto loading vai aparecer na tela.
*/

/*
  mapStateToProps faz o papel do subscribe no redux
  e no react faz papel no render
*/

/*
  O valor do state do verificandoRequisicaoAPI
  vai ser três infos(o state, o reducer que
  contêm a action e a action que quero)
*/

function filterByNumber(arrayPlanets, filterByNumericValues) {
  if (filterByNumericValues.comparison === 'maior que') {
    return arrayPlanets
      .filter((planet) =>
        Number(planet[filterByNumericValues.column]) > Number(filterByNumericValues.value));
  }
  if (filterByNumericValues.comparison === 'menor que') {
    return arrayPlanets
      .filter((planet) =>
        Number(planet[filterByNumericValues.column]) < Number(filterByNumericValues.value));
  }
  if (filterByNumericValues.comparison === 'igual a') {
    return arrayPlanets
      .filter((planet) =>
        Number(planet[filterByNumericValues.column]) === Number(filterByNumericValues.value));
  }
  return arrayPlanets;
}

/* A function filterByNumber foi retirado do código
da minha colega de turma Nat Macedo e adpatado para o meu código*/

const filtraPlanetas = (planetas, filtroDeTexto, filterByNumericValues, order) => {
  let planetasExibidos = planetas;
  filterByNumericValues.forEach((filter) => {
    planetasExibidos = filterByNumber(planetasExibidos, filter);
  });

  if (filtroDeTexto !== '') {
    planetasExibidos = planetasExibidos.filter((planet) => planet.name
      .toLowerCase().includes(filtroDeTexto.toLowerCase()));
  }

  planetasExibidos = planetasExibidos.sort((a, b) => {
    if (isNaN(a[order.column])) {
      if (order.sort === 'ASC') {
        return a[order.column.toLowerCase()] < b[order.column.toLowerCase()] ? -1 : 1;
      }
      return a[order.column.toLowerCase()] > b[order.column.toLowerCase()] ? -1 : 1;
    }
    if (order.sort === 'ASC') {
      return parseInt(a[order.column], 10) - parseInt(b[order.column], 10);
    }
    return parseInt(b[order.column], 10) - parseInt(a[order.column], 10);
  });
  return [...planetasExibidos];
};

/* os states que vou usar mapStateToProps vem do initial_state do reducer*/
const mapStateToProps = (state) => ({
  fazendoRequisicao: state.planetsReducer.fazendoRequisicao,
  data: filtraPlanetas(
    state.planetsReducer.data,
    state.filters.filterByName.name,
    state.filters.filterByNumericValues,
    state.filters.order),
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  StarWarsPlanetsAPI: () => dispatch(fetchAPIStarWarsPlanets()),
});

Table.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  StarWarsPlanetsAPI: PropTypes.func.isRequired,
  fazendoRequisicao: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
/* Estrutura retirada dos exercícios do bloco 16 */
