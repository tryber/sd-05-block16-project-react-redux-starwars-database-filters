import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllPlanets } from '../actions';
import Body from './Body';

function pegaFiltro(filtroPlanetario, planetas) {
  const { value, comparison, column } = filtroPlanetario;
  if (comparison === 'maior que') {
    return planetas[column] * 1 > value * 1;
  } else if (comparison === 'menor que') {
    return planetas[column] * 1 < value * 1;
  }
  return planetas[column] * 1 === value * 1;
}

class Table extends Component {
  componentDidMount() {
    const { getFetch } = this.props;
    getFetch();
  }

  render() {
    const { planetas, name, filtragemPlanetas } = this.props;

/*     consulta filter sem modificar anterior:
    https://desenvolvimentoparaweb.com/javascript/map-filter-
    reduce-javascript/#:~:text=%2F%2F%20array.-,filter
    (%20(%20elem%2C%20index%2C%20arr%20)%20%3D%3E%20arr,
    elemento%20ser%C3%A1%20mantido%20ou%20descartado. */

    let filtroPorPlaneta = planetas.filter((planeta) => planeta.name.indexOf(name) >= 0);
    filtragemPlanetas.forEach(
      (filtro) => {
        filtroPorPlaneta = filtroPorPlaneta.filter(planeta => {
          return pegaFiltro(filtro, planeta);
        });
      }
    );
    return (
      <div>
        StarWars Datatable with Filters
        <br />
        <br />
        <br />
        <br />
        <br />
        <table>
          {
            filtroPorPlaneta.map((planeta) => <Body data={planeta} />)
          }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // isLoading: state.reduceApi.isLoading,
  name: state.filters.filterByName.name,
  planetas: state.reduceApi.data,
  filtragemPlanetas: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getFetch: () => dispatch(fetchAllPlanets()),
});

Table.propTypes = {
  getFetch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  planetas: PropTypes.arrayOf(PropTypes.object).isRequired,
  filtragemPlanetas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

/* optei em não construir componentes para todas as funcionalidades após
assistir plantão com Hamaji (30/08 - 14:00h) e concluir dessa forma */

// refatorei o nro de componentes após plantão com Caciquinho

// implementar propTypes do data

/* consultado https://reactjs.org/docs/typechecking-with-proptypes.html para
construção de props arr */
