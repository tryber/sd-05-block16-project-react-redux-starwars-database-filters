import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchActionPlanets } from '../actions';
import TableBody from './TableBody';
import uuid from 'react-uuid';

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { loading, planets, cabecalho } = this.props;
    if (loading) return <h1>Carregando</h1>;

    return (
      <table>
        <thead>
          <tr>
            {cabecalho.map((titulo) => (
              <th key={uuid()}>{titulo}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading === false
            ? planets.map((infoPlaneta) => (
                <TableBody key={uuid()} cabecalho={cabecalho} data={infoPlaneta} />
              ))
            : null}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.planetReducer.isFetching,
  cabecalho: state.planetReducer.cabecalho,
  planets: state.planetReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchActionPlanets()),
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  cabecalho: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
