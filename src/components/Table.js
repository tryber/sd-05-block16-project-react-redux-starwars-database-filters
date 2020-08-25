import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAPIStarWarsPlanets from '../actions/action';
import filterPlanetsName from '../actions/filterPlanetsName';
import Headers from './Headers';

const renderTable = (data, filter) => {
  let filtra = data;
  if (filter !== '') {
    filtra = filtra.filter((planet) => planet.name.toLowerCase().includes(filter.toLowerCase()));
  }

  return filtra.map((planet) => (
    <tr>
      <td>{planet.name}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.diameter}</td>
      <td>{planet.climate}</td>
      <td>{planet.gravity}</td>
      <td>{planet.terrain}</td>
      <td>{planet.surface_water}</td>
    </tr>
  ));
};

class Table extends React.Component {
  componentDidMount() {
    const { StarWarsPlanetsAPI } = this.props;
    // console.log('api', StarWarsPlanetsAPI);
    StarWarsPlanetsAPI();
    /*
    componentDidMount,quando montado, toda vez que o
    componente é renderizado é feita umaChamada na API.
    */
  }

  render() {
    const { data, fazendoRequisicao, dispatchSearch, filter } = this.props;
    // console.log(this.props);
    return (
      <div>
        <label htmlFor="search">Procurar: </label>
        <input
          data-testid="name-filter"
          id="search"
          onChange={(event) => dispatchSearch(event.target.value)}
        />
        <table>
          <Headers />
          <tbody>
            {renderTable(data, filter)}
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

/* os states que vou usar mapStateToProps vem do reducer initial_state*/
/*
  O valor do state do verificandoRequisicaoAPI
  vai ser três infos(o state, o reducer que
  contêm a action e a action que quero)
*/
const mapStateToProps = (state) => ({
  fazendoRequisicao: state.planetsReducer.fazendoRequisicao,
  data: state.planetsReducer.data,
  filter: state.reducerFilter.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  StarWarsPlanetsAPI: () => dispatch(fetchAPIStarWarsPlanets()),
  dispatchSearch: (name) => dispatch(filterPlanetsName(name)),
});

Table.propTypes = {
  filter: PropTypes.string.isRequired,
  data: PropTypes.arrayOf.isRequired,
  StarWarsPlanetsAPI: PropTypes.func.isRequired,
  dispatchSearch: PropTypes.func.isRequired,
  fazendoRequisicao: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
/* Estrutura retirada dos exercícios do bloco 16 */
