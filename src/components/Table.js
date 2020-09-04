import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets, filterValues } from '../actions';
import Loading from '../components/Loading';

function filterNumber(allPlanets, filter) {
  if (filter === undefined) {
    return allPlanets;
  }
  switch (filter.comparison) {
    case 'maior que':
      return allPlanets.filter((planet) => Number(planet[filter.column]) > Number(filter.value));
    case 'menor que':
      return allPlanets.filter((planet) => Number(planet[filter.column]) < Number(filter.value));
    case 'igual a':
      return allPlanets.filter((planet) => Number(planet[filter.column]) === Number(filter.value));
    default:
      return allPlanets;
  }
}

// solução retirada do repositório:
 // https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/blob/marina-barcelos-react-redux-starwars/src/components/TableBody.js
 // A função filterNumber ela filtra de acordo com o case que recebe do parâmetro filter;

function sortPlanets(planets, sort, column) {
  if (sort === 'DESC') {
    return planets.sort((a, b) => Number(b[column]) - Number(a[column]));
  }
  if (sort === 'ASC') {
    return planets.sort((a, b) => Number(a[column]) - Number(b[column]));
  }
  return planets;
}

// Sort é uma função que organiza um array de acordo com a lógina passada como parâmetro.
// fonte: https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/pull/27

function filArray(array, text) {
  return array.filter((arr) => arr.name.includes(text));
}
  // .includes é uma função verifica se uma determidada
  // string possui o texto passado como paramêtro;
  // fonte: https://www.youtube.com/watch?v=XiAtxDeP-p8;

function mapArray(array) {
  return array.map((arr) => (
    <tr key={arr.name}>
      <td>{arr.name}</td>
      <td>{arr.rotation_period}</td>
      <td>{arr.orbital_period}</td>
      <td>{arr.diameter}</td>
      <td>{arr.climate}</td>
      <td>{arr.gravity}</td>
      <td>{arr.terrain}</td>
      <td>{arr.surface_water}</td>
      <td>{arr.population}</td>
      <td>{arr.residents}</td>
      <td>{arr.films}</td>
      <td>{arr.created}</td>
      <td>{arr.edited}</td>
    </tr>
  ));
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTable: false,
    };
  }

  componentDidMount() {
    const { fetchP } = this.props;
    fetchP();
  }

  render() {
    const headers = [
      'Name', 'rotation period', 'orbital period', 'diameter',
      'climate', 'gravity', 'terrain', 'surface water',
      'population', 'residents', 'films', 'created',
      'edited,',
    ];
    const { planets, search, filter } = this.props;
    const { sort, coluna } = this.props;
    if (this.props.fetching) return <Loading />;
    const ordPlanets = planets.sort((a, b) => a.name.localeCompare(b.name));
    // localeCompare: https://pt.stackoverflow.com/questions/445795/como-funciona-o-m%C3%A9todo-localecompare
    const sortedPlanets = sortPlanets(ordPlanets, sort, coluna);
    const filteredPlanets = filterNumber(sortedPlanets, filter[filter.length - 1]);
    return (
      <table>
        <thead>
          <tr>
            {headers.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{mapArray(filArray(filterNumber(filteredPlanets,
          filter[filter.length - 2]), search))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.emptyReducer.data,
  fetching: state.emptyReducer.fetching,
  search: state.filters.filterByName.name,
  filter: state.filters.filterByNumericValues,
  sort: state.filters.order.sort,
  coluna: state.filters.order.column,
});

const mapDispatchToProps = (dispatch) => ({
  fetchP: () => dispatch(fetchPlanets()),
  filterV: (name1, name2, name3) => dispatch(filterValues(name1, name2, name3)),
});

Table.propTypes = {
  fetchP: PropTypes.func.isRequired,
  fetching: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  coluna: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
