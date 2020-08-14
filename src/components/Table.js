import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanetsThunk, filterNameAction } from '../actions';
import TableHeader from '../components/TableHeader';

class Table extends React.Component {
  //[HONESTIDADE ACADÊMICA]
  //A primeira versão deste componente Table (requisito 1), foi pensada em grupo.

  componentDidMount() {
    const { async } = this.props;
    async();
  }

  render() {
    const { fetching, data, nameFilter } = this.props;
    return (
      <div>
        {fetching && <h5>Loading...</h5>}
        {!fetching && (
          <div>
            <table>
              <TableHeader />
              {data.filter((planet) => planet.name.includes(nameFilter))
              .map((planet) => (
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
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.planetReducer.fetching,
  data: state.planetReducer.data,
  nameFilter: state.filterNameReducer.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  async: (data) => dispatch(fetchPlanetsThunk(data)),
  getInput: (input) => dispatch(filterNameAction(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
