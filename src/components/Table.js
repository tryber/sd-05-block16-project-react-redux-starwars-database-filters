import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchData from '../actions';

const tableHeader = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.body = this.body.bind(this);
    this.filterNumbers = this.filterNumbers.bind(this);
  }

  filterNumbers(filteredPlanets) {
    const { numericFilters } = this.props;
    for (let i = 0; i < numericFilters.length; i += 1) {
      if (numericFilters[i].comparison === 'maior que') {
        filteredPlanets = filteredPlanets.filter((planet) =>
          Number(planet[numericFilters[i].column]) > Number(numericFilters[i].value));
      } else if (numericFilters[i].comparison === 'menor que') {
        filteredPlanets = filteredPlanets.filter((planet) =>
          Number(planet[numericFilters[i].column]) < Number(numericFilters[i].value));
      } else if (numericFilters[i].comparison === 'igual a') {
        filteredPlanets = filteredPlanets.filter((planet) =>
          Number(planet[numericFilters[i].column]) === Number(numericFilters[i].value));
      }
    }
    return filteredPlanets;
  }

  body() {
    const { planets, nameFilter } = this.props;
    let filteredPlanets = planets;
    if (nameFilter !== '') {
      filteredPlanets = filteredPlanets.filter((planet) =>
      planet.name.includes(nameFilter));
    }
    filteredPlanets = this.filterNumbers(filteredPlanets);
    return (
      <tbody>
        {filteredPlanets.map((planet) =>
          <tr key={planet.name}>
            {
              tableHeader.map((item) =>
                <td key={item}>
                  {planet[item]}
                </td>)
            }
          </tr>,
        )}
      </tbody>
    );
  }

  render() {
    const { loading, planets } = this.props;
    return (
      <div>
        {loading && <p>Loading</p>}
        {!loading && planets &&
          <table>
            {
              <thead>
                <tr>
                  {tableHeader.map((item) => <th key={item}>{item}</th>)}
                </tr>
              </thead>
            }
            {this.body()}
          </table>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.fetchReducer.loading,
  planets: state.fetchReducer.data,
  nameFilter: state.filters.filterByName.name,
  numericFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  nameFilter: PropTypes.string.isRequired,
  numericFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
};
