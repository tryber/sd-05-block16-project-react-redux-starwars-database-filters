import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanetsThunk } from '../actions';

class Table extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data
  //   };
  // }

  //[HONESTIDADE ACADÊMICA]
  //A primeira versão deste componente Table, para renderizar a tabela, foi pensada e desenvolvida em grupo.

  componentDidMount() {
    const { async } = this.props;
    async();
  }

  render() {
    const { fetching, data } = this.props;
    return (
      <div>
        <h1> StarWars Datatable with Filters </h1>
        {fetching && <h5>Loading...</h5>}
        {!fetching && (
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
                <th>Surface water</th>
                <th>Population</th>
                <th>Films</th>
                <th>Created</th>
              </tr>
            </thead>
            {data.map((planet) => (
              <tbody key={planet.name}>
                <tr>
                  <td key={planet.name}>{planet.name}</td>
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
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.planetReducer.fetching,
  data: state.planetReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  async: (data) => dispatch(fetchPlanetsThunk(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
