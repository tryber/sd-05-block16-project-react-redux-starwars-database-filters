import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';

const columnNumbers = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.FilterPlanets = this.FilterPlanets.bind(this);
  }
  componentDidMount() {
    this.props.fetchPlanets();
  }

  sortMe(planets) {
    const { column, sort } = this.props.order;
    const sorter = planets.sort((a, b) => +(a[column.toLowerCase()]) - +(b[column.toLowerCase()]));
    if (columnNumbers.includes(column.toLowerCase())) {
      if (sort === 'ASC') {
        return sorter;
      }
      return sorter.reverse();
    }
    if (sort === 'ASC') {
      return planets.sort((a, b) => (a[column.toLowerCase()] > b[column.toLowerCase()] ? 1 : -1));
    }
    return planets.sort((a, b) => (a[column.toLowerCase()] < b[column.toLowerCase()] ? 1 : -1));
  }

  FilterPlanets() {
    const { planetsData, filterNum } = this.props;
    let filtered = [...planetsData];
    if (filterNum.length > 0) {
      filterNum.forEach((filter) => {
        const { column, comparison, value } = filter;
        if (comparison === 'maior que') {
          filtered = filtered.filter((planet) => +planet[column] > +value); // + vira number
        } else if (comparison === 'menor que') {
          filtered = filtered.filter((planet) => +planet[column] < +value);
        } else {
          filtered = filtered.filter((planet) => +planet[column] === +value);
        }
      });
    }

    return filtered;
  }

  render() {
    const { fetching, filters } = this.props;
    let filterAll = this.FilterPlanets();
    filterAll = this.sortMe(filterAll);
    if (fetching) {
      return (<tbody><tr><td>Loading...</td></tr></tbody>);
      /* Alterado de Div para td pra evitar erro chato de DOM que não prejudica funcionamento porém
      incomoda*/
    }
    return (
      <tbody>
        {filterAll
          .filter((planet) => planet.name.includes(filters))
          .map((planet) => (
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
  planetsData: state.planetsReducer.planetsData,
  fetching: state.planetsReducer.fetching,
  filters: state.filters.filterByName.name,
  filterNum: state.filters.filterByNumericValues,
  order: state.filters.order,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);

// Feito refatoração 6x em Body e Bonus.jsx esse foi o modo mais proximo de não quebrar nada

Body.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  planetsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
  filters: PropTypes.string.isRequired,
  filterNum: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.arrayOf(PropTypes.object).isRequired,
};
