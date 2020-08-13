import React, { Component } from 'react';
import { handleFetch } from '../reducers';
import { connect } from 'react-redux';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { test: 'HelloWorld' };
  }

  componentDidMount() {
    const { handleFetch } = this.props;
    handleFetch();
  }

  render() {
    const { isfetching, data } = this.props;
    return (
      <div>
        {isfetching && <h1>Loading...</h1>}

        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
          </tr>
        </thead>
          {!isfetching && data.map(planet => (
            <tbody key={planet.name}>
              <tr>
                <td >{planet.name}</td>
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
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleFetch: (e) => dispatch(handleFetch(e)),
});

const mapStateToProps = (state) => ({
  isfetching: state.fetchReducer.isfetching,
  data: state.fetchReducer.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

// Disscussed and did some pair programing with Paulo D'Andrea on this code
// 