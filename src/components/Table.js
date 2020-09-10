import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Planeta from './Planeta';
import { dataSet } from '../actions/index';
// import data from "../section/data";

// coloco o arr em outra variável para não modificar
// o array recebido e retornar um novo array modificado
function filtrar(arr, arrfiltros) {
  let resultadoFinal = [...arr];
  arrfiltros.forEach((filtro) => {
    const { column, comparison, value } = filtro;
    if (comparison === 'maior que') {
      resultadoFinal = resultadoFinal.filter((planet) => +planet[column] > +value);
    } else if (comparison === 'igual a') {
      resultadoFinal = resultadoFinal.filter((planet) => +planet[column] === +value);
    } else {
      resultadoFinal = resultadoFinal.filter((planet) => +planet[column] < +value);
    }
  });
  return resultadoFinal;
}

const arrayNumeros = ['rotation_period', 'orbital_period',
  'diameter', 'surface_water', 'population'];

class Table extends React.Component {
  componentDidMount() {
    this.props.startAPI();
  }

  ordernacao(planetas) {
    const { column, sort } = this.props.order;
    if (arrayNumeros.includes(column)) {
      if (sort === 'ASC') {
        return planetas.sort((a, b) => (Number(a[column]) - Number(b[column])));
      }
      return planetas.sort((b, a) => (Number(a[column]) - Number(b[column])));
    }
    if (sort === 'ASC') {
      return planetas.sort((a, b) => (a[column.toLowerCase()] > b[column.toLowerCase()] ? 1 : -1));
    }
    return planetas.sort((b, a) => (a[column.toLowerCase()] > b[column.toLowerCase()] ? 1 : -1));
  }

  render() {
    const { data, cabecalho, isLoading, nomeProcurado, filtros } = this.props;
    if (isLoading) return <h1>loading...</h1>;
    const planetas = data.filter((planeta) =>
      planeta.name.toLowerCase().indexOf(nomeProcurado.toLowerCase()) >= 0);
    let resultado;
    if (filtros.length > 0) {
      resultado = filtrar(planetas, filtros);
    } else resultado = planetas;
    if (this.props.ordenacaoAtivada) {
      resultado = this.ordernacao(resultado);
    }
    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        <table>
          <thead>
            <tr>
              {cabecalho.map((titulo) => (<th>{titulo}</th>))}
            </tr>
          </thead>
          <tbody>
            { isLoading === false ? resultado.map((inforPlaneta) => (
              <Planeta cabec={cabecalho} data={inforPlaneta} />
            )) : null
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reducerBasico.data,
  cabecalho: state.reducerBasico.cabecalho,
  isLoading: state.reducerBasico.isLoading,
  nomeProcurado: state.filters.filterByName.name,
  filtros: state.filters.filterByNumericValues,
  order: state.filters.order,
  ordenacaoAtivada: state.filters.ordenacaoAtivada,
});

// todas as actions que for utilizar tem que estar dentro do mapDispatch
// dentro da props da minha Table tem uma props chamada startAPI
const mapDispatchToProps = (dispatch) => ({
  startAPI: () => dispatch(dataSet()),
});

Table.propTypes = {
  data: Proptypes.arrayOf(Proptypes.object).isRequired,
  cabecalho: Proptypes.arrayOf(Proptypes.object).isRequired,
  isLoading: Proptypes.bool.isRequired,
  startAPI: Proptypes.func.isRequired,
  nomeProcurado: Proptypes.string.isRequired,
  filtros: Proptypes.arrayOf(Proptypes.object).isRequired,
  ordenacaoAtivada: Proptypes.arrayOf(Proptypes.object).isRequired,
  order: Proptypes.arrayOf(Proptypes.object).isRequired,
  sort: Proptypes.arrayOf(Proptypes.object).isRequired,
  column: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
