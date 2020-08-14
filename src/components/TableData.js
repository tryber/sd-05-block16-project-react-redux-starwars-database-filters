import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchPlanetsThunk } from '../actions';

class TableData extends React.Component {
  // [HONESTIDADE ACADÊMICA]
  // A primeira versão deste componente Table (requisito 1)
  // foi pensada e desenvolvida em grupo.
  render() {
    const { data, nameFilter } = this.props;
    return (
      <tbody>
        {/* <p>{nameFilter}</p> */}
        {data
          .filter((planet) => planet.name.includes(nameFilter))
          .map((planet) => (
            <tr key={planet.name}>
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
          ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetReducer.data,
  nameFilter: state.filterNameReducer.filters.filterByName.name,
});

TableData.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  nameFilter: propTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(TableData);
