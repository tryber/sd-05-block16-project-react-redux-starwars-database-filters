import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPIStarWarsPlanets } from '../redux/actions/action';

class Table extends React.Component {
  componentDidMount() {
    const { StarWarsPlanetsAPI } = this.props;
    console.log('api', StarWarsPlanetsAPI);
    StarWarsPlanetsAPI();
    /* componentDidMount,quando montado,toda vez que o componente é renderizado é feita umaChamada na API.*/
  }

  render() {
    const { resultPlanets } = this.props;
    console.log('resultPlanets', resultPlanets);
    return (
      <div>
        <h1>renderizar isto na tela</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>rotation_period</th>
              <th>orbital_period</th>
              <th>diameter</th>
              <th>climate</th>
              <th>gravity</th>
              <th>terrain</th>
              <th>surface_water</th>
              <th>population</th>
            </tr>
          </thead>
          <tbody>
            {resultPlanets.map((planet) => {
              return (
                <tr>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

/*
  mapStateToProps faz o papel do subscribe no redux
  e no react faz papel no render
*/

/* os states que vou usar mapStateToProps vem do reducer initial_state*/
/* O valor do statedoReducerVerificaActions vai ser três infos (o state, o reducer que contêm a action e a action que quero)*/
const mapStateToProps = (state) => {
  console.log(state);
  return {
    fazendoRequisicao: state.fazendoRequisicao,
    resultPlanets: state.resultPlanets,
  };
};

const mapDispatchToProps = (dispatch) => ({
  StarWarsPlanetsAPI: () => dispatch(fetchAPIStarWarsPlanets()),
});

Table.propTypes = {
  resultPlanets: PropTypes.arrayOf.isRequired,
  StarWarsPlanetsAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
/* Estrutura retirada dos exercícios do bloco 16 */
