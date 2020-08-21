import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPIStarWarsPlanets } from '../actions/action';
import Headers from './Headers';

class Table extends React.Component {
  componentDidMount() {
    const { StarWarsPlanetsAPI } = this.props;
    console.log('api', StarWarsPlanetsAPI);
    StarWarsPlanetsAPI();
    /*
      componentDidMount,quando montado, toda vez que o
      componente é renderizado é feita umaChamada na API.
    */
  }

  render() {
    const { resultPlanets, fazendoRequisicao } = this.props;
    console.log('resultPlanets', resultPlanets);
    console.log('fazendoRequisicao', fazendoRequisicao);
    return (
      <div>
        <table>
          <Headers />
          <tbody>
            {resultPlanets.map((planet) => (
              <tr>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
              </tr>
            ))
            }
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
  O valor do statedoReducerVerificaActions
  vai ser três infos(o state, o reducer que
  contêm a action e a action que quero)
*/
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
  fazendoRequisicao: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
/* Estrutura retirada dos exercícios do bloco 16 */
