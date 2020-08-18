import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import queryFilters from '../../services/queryFilters';
import { fetchPlannets } from '../../actions';

class Table extends React.Component {
  componentDidMount() {
    this.props.getPlanet();
  }

  render() {
    const { planet, loading, QF, filters, order, sort } = this.props;
    let ths = [];
    if (planet.length > 0) ths = Object.keys(planet[0]);
    ths.splice(ths.indexOf('residents'), 1);
    const allPlanets = queryFilters(planet, QF, filters, order, sort);
    if (!loading) return <h2>Loading</h2>;
    return (
      <table>
        <thead>
          <tr>
            {ths.map((info) => (
              <th key={info}>{info}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allPlanets.map((info) => (
            <tr key={Math.random(99999999)}>
              {ths.map((data) => (
                <td key={Math.random(9999999)}>{info[data]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planet: state.planets.data,
  loading: state.planets.isFetching,
  QF: state.filters.filterByName.name,
  filters: state.filters.filterByNumericValues,
  order: state.filters.order.column,
  sort: state.filters.order.sort,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanet: () => dispatch(fetchPlannets()),
});

Table.propTypes = {
  planet: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPlanet: PropTypes.func.isRequired,
  QF: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  sort: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
