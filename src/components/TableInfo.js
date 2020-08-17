import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

// tabela que receberá o corpo da função

class TableInfo extends React.Component {
  render() {
    const { data } = this.props;
    return (
      data.map((planet) => (
        <tbody key={planet.name}> 
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
        </tbody>
      ))
    );
  }
}

const mapDispatchToProps = (state) => ({
  data: state.planetReducer.data,
});


export default connect(mapDispatchToProps)(TableInfo);

TableInfo.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};
