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
    /* console.log(this.props); */
    if (this.props.isLoading) return <h1>loading...</h1>;
    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        <table>
          <thead>
            <tr>
              {this.props.cabecalho.map((titulo) => (
                <th>{titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* <Planeta data={this.props.data.map()} /> */}
            {this.props.data.map((inforPlaneta) => (
              <Planeta cabec={this.props.cabecalho} data={inforPlaneta} />
            ))}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
