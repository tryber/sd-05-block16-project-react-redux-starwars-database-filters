import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';
import TableHeaders from './tableheaders';

class Table extends React.Component {
  componentDidMount() {
    const { getCurrentPlanets } = this.props;
    // console.log('antes de chamar')
    getCurrentPlanets();
  }
  render() {
    const { swPlanetss, isFetching } = this.props;
    if (isFetching) { return <p>Carregando...</p>; }
    return (
      <section>
        <table>
          <TableHeaders />
          {swPlanetss.map((elements) => (
            <tbody>
              <tr>
                <td>{elements.name}</td>
                <td>{elements.rotation_period}</td>
                <td>{elements.orbital_period}</td>
                <td>{elements.diameter}</td>
                <td>{elements.climate}</td>
                <td>{elements.gravity}</td>
                <td>{elements.terrain}</td>
                <td>{elements.surface_water}</td>
                <td>{elements.population}</td>
                <td>{elements.films}</td>
                <td>{elements.created}</td>
                <td>{elements.edited}</td>
                <td>{elements.url}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  swPlanetss: state.swPlanetss.data,
  isFetching: state.swPlanetss.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
  getCurrentPlanets: () => dispatch(fetchPlanets()) });
// Dúvida solucionada no site
// https://stackoverflow.com/questions/38684925/react-eslint-error-missing-in-props-validation
Table.propTypes = {
  getCurrentPlanets: PropTypes.func.isRequired,
  swPlanetss: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
