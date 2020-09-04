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

class Table extends React.Component {
  componentDidMount() {
    this.props.startAPI();
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

    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        <table>
          <thead>
            <tr>
              {cabecalho.map((titulo) => (
                <th>{titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            { isLoading === false ? resultado.map((inforPlaneta) => (
              <Planeta cabec={cabecalho} data={inforPlaneta} />
            )) : null
            }
            {/* {this.props.data.map((inforPlaneta) => (
              <Planeta cabec={this.props.cabecalho} data={inforPlaneta} />
            ))} */}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
