import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class TableBody extends React.Component {
  render() {
    const { data, filterText } = this.props;
    const filtrar = data;

    return (
      <tbody>
        {filtrar.filter((planet) => planet.name.toLowerCase().includes(filterText.name))
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
  // render() {
  //   return (
  //     <div>
  //       tabela
  //     </div>
  //   )
  // }
}

const mapStateToProps = (state) => ({
  data: state.reducer.data,
  filterText: state.filters.filterByName,
});

export default connect(mapStateToProps)(TableBody);

TableBody.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  filterText: propTypes.string.isRequired,
};
