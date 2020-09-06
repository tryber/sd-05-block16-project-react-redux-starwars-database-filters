import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Body extends React.Component {
  render() {
    const { planetas } = this.props;
    return (
      <tbody>
        {planetas
          .filter((planeta) => planeta.name.includes(this.props.nome))
          .map((planeta, index) => (
            <tr key={index}>
              <td>{planeta.name}</td>
              <td>{planeta.rotation_period}</td>
              <td>{planeta.orbital_period}</td>
              <td>{planeta.diameter}</td>
              <td>{planeta.climate}</td>
              <td>{planeta.gravity}</td>
              <td>{planeta.terrain}</td>
              <td>{planeta.surface_water}</td>
              <td>{planeta.population}</td>
              <td>{planeta.films}</td>
              <td>{planeta.created}</td>
              <td>{planeta.edited}</td>
              <td>{planeta.url}</td>
            </tr>
          ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planetas: state.reducerApi.data,
  nome: state.filters.filterByName.name,
});

export default connect(mapStateToProps)(Body);
