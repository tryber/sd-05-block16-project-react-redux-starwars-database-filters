import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions/actionApi';

class Table extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets()
  }

  render() {
    const { results, isFetching } = this.props; // results e
    // console.log(this.props)

    return (
      <div>StarWars Datatable with Filters
        <table>
          <thead>
            <thead>name</thead>
            <thead>Rotation Period</thead>
            <thead>Orbital Period</thead>
            <thead>Diameter</thead>
            <thead>Climate</thead>
            <thead>Gravity</thead>
            <thead>Terrain</thead>
            <thead>Surface Water</thead>
            <thead>Population</thead>
            <thead>Films</thead>
            <thead>Created</thead>
            <thead>Edited</thead>
            <thead>URL</thead>
          </thead>
          {
            isFetching === false ? // if ternário
              results.map(batatinha => (
                <tbody>
                  <tbody>{batatinha.name}</tbody>
                  <tbody>{batatinha.rotation_period}</tbody>
                  <tbody>{batatinha.orbital_period}</tbody>
                  <tbody>{batatinha.diameter}</tbody>
                  <tbody>{batatinha.climate}</tbody>
                  <tbody>{batatinha.gravity}</tbody>
                  <tbody>{batatinha.terrain}</tbody>
                  <tbody>{batatinha.surface_water}</tbody>
                  <tbody>{batatinha.population}</tbody>
                  <tbody>{batatinha.films}</tbody>
                  <tbody>{batatinha.created}</tbody>
                  <tbody>{batatinha.edited}</tbody>
                  <tbody>{batatinha.url}</tbody>
                </tbody>
                ))
                : null
            }
        </table>
      </div>
    );
  }
}

// mapStateToProps -> faz o papel do subscribe no redux
// e no React faz o papel do render()

const mapStateToProps = (state) => ({ // é executada toda vez que a store é alterada
  isFetching: state.apiPlanetReducer.isFetching, // apiplanetReducer -> reducer/index.js | isFetching -> actions/actionApi.js
  results: state.apiPlanetReducer.batatinhaResults,
}) // o Objeto retornado é uma props acessível no componente Table

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets())
})

// currying - conceito de programação funcional
export default connect(mapStateToProps, mapDispatchToProps)(Table);
// o primeiro parâmetro do connect é esperado o mapStateToProps e depois o mapDispatchToProps
