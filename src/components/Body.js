// Transparência: Paulo Zambelli foi de grande ajuda nessa
// parte do projeto explicando todo o processo de Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AcionaApi } from '../actions';

class Body extends Component {
  constructor(props) {
    super(props);
    this.filtrando = this.filtrando.bind(this);
  }

  componentDidMount() {
    this.props.AcionaApi();
  }

  filtrando() {
    const { byNumeric, planets } = this.props;
    let finalPlanets = [...planets];
    if (byNumeric.length > 0) {
      byNumeric.forEach((filtro) => {
        const { column, comparison, value } = filtro;
        if (comparison === 'maior que') {
          finalPlanets = finalPlanets.filter(
            (planeta) => +planeta[column] > +value,
          );
        } else if (comparison === 'menor que') {
          finalPlanets = finalPlanets.filter(
            (planeta) => +planeta[column] < +value,
          );
        } else {
          finalPlanets = finalPlanets.filter(
            (planeta) => +planeta[column] === +value,
          );
        }
      });
    }
    return finalPlanets;
  }

  // ANCHOR render
  render() {
    const { filters } = this.props;
    const filterPlanets = this.filtrando();
    return (
      <tbody>
        {filterPlanets
          .filter((planeta) => planeta.name.includes(filters))
          .map((planeta) => (
            <tr key={planeta.name}>
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

// ANCHOR mapToProps
const mapStateToProps = (state) => ({
  planets: state.planetsReducer.planets,
  filters: state.filters.filterByName.name,
  byNumeric: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  AcionaApi: () => dispatch(AcionaApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);

// ANCHOR PropTypes
Body.propTypes = {
  AcionaApi: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.string.isRequired,
  byNumeric: PropTypes.arrayOf(PropTypes.object).isRequired,
};
