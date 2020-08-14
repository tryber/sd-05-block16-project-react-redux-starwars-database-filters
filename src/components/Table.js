import React, { Component } from 'react';
import { handleAsyncFetch } from '../reducers';
import { connect } from 'react-redux';
import Thead from './THead';



function fncComparador(valorDaColuna, comparador, value) {
  switch (comparador) {
    case 'maior que':
      return valorDaColuna > value;
    case 'menor que':
      return valorDaColuna < value;
    case 'igual a':
      // console.log('true');
      return valorDaColuna === value;
    default:
      return true;
  }
  // count ++ 
}

class Table extends Component {

  componentDidMount() {
    const { handleAsync } = this.props;

    handleAsync();
  }


  render() {
    const { filteredName, isfetching, data, comparison, value, column } = this.props;
    return (
      <div>
        <h2>{this.props.filteredName}</h2>
        {/* StarWars Datatable with Filters */}
        {isfetching && <h1>Loading...</h1>}

        <table>
          <Thead />
          {!isfetching && 
          data.filter((planet) => (planet.name.toLowerCase()).includes(filteredName.toLowerCase()))
          // .filter(column comparison value)
          // .filter().
            .filter((planet) => fncComparador(Number(planet[column]), comparison, value))
            .map((planet) => (
              <tbody key={planet.name}>
                <tr>
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
              </tbody>
            ))
          }
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAsync: (e) => dispatch(handleAsyncFetch(e)),
});

const mapStateToProps = (state) => ({
  isfetching: state.requestReducer.isfetching,
  data: state.requestReducer.data,
  filteredName: state.filters.filterByName.name,

  column: state.filters.filterByNumericValues[0].column,
  comparison: state.filters.filterByNumericValues[0].comparison,
  value: Number(state.filters.filterByNumericValues[0].value),
});

// const mapStateToProps = (state) => ({
//   filteredName: state.filterReducer.filters.filterByName.name,
// });

export default connect(mapStateToProps, mapDispatchToProps)(Table);


// climate: "arid"
// created: "2014-12-09T13:50:49.641000Z"
// diameter: "10465"
// edited: "2014-12-20T20:58:18.411000Z"
// films: (5) ["https://swapi-trybe.herokuapp.com/api/films/1/", "https://swapi-trybe.herokuapp.com/api/films/3/", "https://swapi-trybe.herokuapp.com/api/films/4/", "https://swapi-trybe.herokuapp.com/api/films/5/", "https://swapi-trybe.herokuapp.com/api/films/6/"]
// gravity: "1 standard"
// name: "Tatooine"
// orbital_period: "304"
// population: "200000"
// residents: (10) ["https://swapi-trybe.herokuapp.com/api/people/1/", "https://swapi-trybe.herokuapp.com/api/people/2/", "https://swapi-trybe.herokuapp.com/api/people/4/", "https://swapi-trybe.herokuapp.com/api/people/6/", "https://swapi-trybe.herokuapp.com/api/people/7/", "https://swapi-trybe.herokuapp.com/api/people/8/", "https://swapi-trybe.herokuapp.com/api/people/9/", "https://swapi-trybe.herokuapp.com/api/people/11/", "https://swapi-trybe.herokuapp.com/api/people/43/", "https://swapi-trybe.herokuapp.com/api/people/62/"]
// rotation_period: "23"
// surface_water: "1"
// terrain: "desert"
// url: "https://swapi-trybe.herokuapp.com/api/planets/1/"

            // .filter((planet) => (Number(planet[column]) > value))
