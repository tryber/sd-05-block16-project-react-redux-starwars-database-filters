import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPlanets } from '../actions/actionApi';
import Cabecalho from './Cabecalho';
import '../App.css';
import Infos from './Infos';

class Table extends React.Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    // results e isFetching estão vindo do mapStateToProps
    const { results, isFetching } = this.props;
    return (
      <div>StarWars Datatable with Filters
        <table>
          <Cabecalho />
          {  // if ternário
            isFetching === false ? results.map((batatinha) => (
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
};
