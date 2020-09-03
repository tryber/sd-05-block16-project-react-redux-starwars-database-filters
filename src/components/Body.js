import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AcionaApi } from '../actions';

class Body extends Component {
  componentDidMount() {
    this.props.AcionaApi();
  }

  render() {
    const { planets } = this.props;
    return (
      <tbody>
        {planets.map((planeta) => (
          <tr>
            <td>{planeta.name}</td>
            <td>{planeta.rotation_period}</td>
            <td>{planeta.orbital_period}</td>
            <td>{planeta.diameter}</td>
            <td>{planeta.climate}</td>
            <td>{planeta.gravity}</td>
            <td>{planeta.terrain}</td>
            <td>{planeta.surface_water}</td>
            <td>{planeta.population}</td>
            <td>{planeta.films}</td>
            <td>{planeta.created}</td>
            <td>{planeta.edited}</td>
            <td>{planeta.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.planetsReducer.planets,
});

const mapDispatchToProps = (dispatch) => ({
  AcionaApi: () => dispatch(AcionaApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);

Body.propTypes = {
  AcionaApi: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
