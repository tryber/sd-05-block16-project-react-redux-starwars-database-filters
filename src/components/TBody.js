import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class TBody extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <tbody>
        {data.map((planet) => (
          <tr key={planet.name}>
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
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.fetchReducer.data,
});

export default connect(mapStateToProps)(TBody);

TBody.propTypes = {
  data: propTypes.arrayOf(propTypes.Object).isRequired,
};
