import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import funcaoApi from '../actions/index';

class Body extends Component {
  componentDidMount() {
    this.props.funcaoApi();
  }

  render() {
    console.log(funcaoApi());
    const { planets } = this.props;
    return planets.map((planeta) => (
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
    ));
  }
}

// muda o estado do componente
const mapStateToProps = (state) => ({
  planets: state.planReducer.planets,
});

// altera o reducer
const mapDispatchToProps = (dispatch) => ({
  funcaoApi: () => dispatch(funcaoApi()),
});

Body.propTypes = {
  funcaoApi: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
