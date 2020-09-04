import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';

class Body extends React.Component {
  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    const { planetsData, fetching, filters } = this.props;
    if (fetching) return <h2>Loading...</h2>;
    return (
      <tbody>
        {planetsData
          .filter((planet) => planet.name.includes(filters))
          .map((planet) => (
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planetsData: state.planetsReducer.planetsData,
  fetching: state.planetsReducer.fetching,
  filters: state.filterReducer.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);

Body.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
  filters: PropTypes.string.isRequired,
};
