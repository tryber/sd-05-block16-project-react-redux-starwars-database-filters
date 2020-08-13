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
                <th>Url</th>
                <th>Created</th>
                <th>Edited</th>
              </tr>
            </thead>
            {data.map((planet) => (
              <tbody key={planet.name}>
                <tr>
                  <td key={planet.name}>{planet.name}</td>
                  <td key={planet.rotation_period}>{planet.rotation_period}</td>
                  <td key={planet.orbital_period}>{planet.orbital_period}</td>
                  <td key={planet.diameter}>{planet.diameter}</td>
                  <td key={planet.climate}>{planet.climate}</td>
                  <td key={planet.gravity}>{planet.gravity}</td>
                  <td key={planet.terrain}>{planet.terrain}</td>
                  <td key={planet.surface_water}>{planet.surface_water}</td>
                  <td key={planet.population}>{planet.population}</td>
                  <td key={planet.films}>{planet.films}</td>
                  <td key={planet.url}>{planet.url}</td>
                  <td key={planet.created}>{planet.created}</td>
                  <td key={planet.edited}>{planet.edited}</td>
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
