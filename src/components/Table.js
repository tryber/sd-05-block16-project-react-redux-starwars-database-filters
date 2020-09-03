import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllPlanets } from '../actions';
import Body from './Body';
import Head from './Head';

export class Table extends Component {
  componentDidMount() {
    const { getFetch } = this.props;
    getFetch();
  }

  render() {
    const { planetas } = this.props;
    return (
      <div>
        StarWars Datatable with Filters
        <table>
          <thead>
            <Head />
          </thead>
          <tbody>
            {
            planetas.map((planeta) => <Body data={planeta} />)
          }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetas: state.reduceApi.data,
  isLoading: state.reduceApi.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getFetch: () => dispatch(fetchAllPlanets()),
});

Table.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
  getFetch: PropTypes.func.isRequired,
  planetas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

/* optei em não construir componentes para todas as funcionalidades após
assistir plantão com Hamaji (30/08 - 14:00h) e concluir dessa forma */

// refatorei o nro de componentes após plantão com Caciquinho

// implementar propTypes do data

/* consultado https://reactjs.org/docs/typechecking-with-proptypes.html para
construção de props arr */
