import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Planeta from './Planeta';
import { dataSet } from '../actions/index';
// import data from "../section/data";

class Table extends React.Component {
  componentDidMount() {
    this.props.startAPI();
  }

  render() {
   /*  console.log(this.props); */
    const { data, cabecalho, isLoading, nomeProcurado } = this.props;
    if (isLoading) return <h1>loading...</h1>;
    const planetas = data.filter((planeta) =>
      planeta.name.toLowerCase().indexOf(nomeProcurado.toLowerCase()) >= 0);
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
            { isLoading === false ? planetas.map((inforPlaneta) => (
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
