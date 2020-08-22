import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

// tabela que receberá o corpo da função
class TableInfo extends React.Component {
  render() {
    const { data, text } = this.props;
    const filterPlanets = data.filter((input) =>
      input.name.toUpperCase().includes(text.name.toUpperCase()),
    );
    return filterPlanets.map((planet) => (
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
    ));
  }
}

const mapStateToProps = (state) => ({
  data: state.planetReducer.data,
  text: state.filters.filterByName,
});

export default connect(mapStateToProps)(TableInfo);

TableInfo.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};
