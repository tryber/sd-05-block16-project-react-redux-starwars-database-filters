import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchActionPlanets } from '../../actions';
import TableBody from '../TableBody';
import FilterPlanet from '../FilterPlanet';

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { loading, planets, cabecalho, filtrado } = this.props;
    if (loading) return <h1>Carregando</h1>;

    const planetFiltered = planets.filter((el) =>
      el.name.toLowerCase().indexOf(filtrado.name.toLowerCase()) >= 0);

    return (
      <div>
        <FilterPlanet />
        <table>
          <thead>
            <tr>
              {cabecalho.map((titulo) => (
                <th key={Math.floor(Math.random() * 0x100000)}>{titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading === false
              ? planetFiltered.map((infoPlaneta) => <TableBody data={infoPlaneta} />)
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.planetR.isFetching,
  cabecalho: state.planetR.cabecalho,
  planets: state.planetR.data,
  filtrado: state.filters.filterByName,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchActionPlanets()),
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filtrado: PropTypes.arrayOf(PropTypes.object).isRequired,
  cabecalho: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
