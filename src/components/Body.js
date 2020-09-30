import React, { Component } from 'react';
import { funcaoApi } from '../actions/index';
import { connect } from 'react-redux';

class Body extends Component {
  componentDidMount() {
    this.props.funcaoApi();
  }

  render() {
    const { planets } = this.props;
    return (
      <tbody>
        {planets.map((escolhido) => (
          <tr>
            <td>{escolhido.name}</td>
            <td>{escolhido.rotation_period}</td>
            <td>{escolhido.orbital_period}</td>
            <td>{escolhido.diameter}</td>
            <td>{escolhido.climate}</td>
            <td>{escolhido.gravity}</td>
            <td>{escolhido.terrain}</td>
            <td>{escolhido.surface_water}</td>
            <td>{escolhido.population}</td>
            <td>{escolhido.films}</td>
            <td>{escolhido.created}</td>
            <td>{escolhido.edited}</td>
            <td>{escolhido.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
    planets: state.planReducer.planets,
});

const mapDispatchToProps = (dispatch) =>({
    funcaoApi: () => dispatch(funcaoApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
