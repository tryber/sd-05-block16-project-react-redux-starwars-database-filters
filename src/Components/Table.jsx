import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Planet from './planet';

function small(data, arrayFilter) {
  let planets = data.results.map((e) => {
    delete e.residents;
    const t = { ...e };
    return t;
  });
  arrayFilter.forEach((e) => {
    switch (e.comparison) {
      case 'maior que':
        planets = planets.filter((planet) => Number(planet[e.column]) > e.value);
        break;
      case 'menor que':
        planets = planets.filter((planet) => Number(planet[e.column]) < e.value);
        break;
      case 'igual a':
        planets = planets.filter((planet) => planet[e.column] === e.value);
        break;
      default:
        break;
    }
  });
  return planets;
}
const ASC = ({ a, b, t, col }) => {
  if (t === 'ASC') {
    return a[col] > b[col] ? 1 : -1;
  }
  return a[col] < b[col] ? 1 : -1;
};
function organizeMe(a, b, type) {
  const col = type.column.toLowerCase();
  const check = ['name', 'climate', 'gravity', 'terrain'].find((e) => e === col);
  if (check) return ASC({ a, b, t: type.sort, col });

  if (type.sort === 'ASC') {
    return parseInt(a[col], 10) - parseInt(b[col], 10);
  }
  return parseInt(b[col], 10) - parseInt(a[col], 10);
}
function Table(props) {
  if (props.isLoading) return <h1>No data</h1>;
  const { filterUpdate, data, arrayFilter, order } = props;
  const planets = small(data, arrayFilter).sort((a, b) => (order.sort === 'ASC' ? organizeMe(a, b, order) : organizeMe(a, b, order)));
  const topo = Object.entries(planets[0]).map((e) => e[0].replace(/_/, ' '));
  return (
    <table>
      <thead>
        <tr>
          {topo.map((desc) => (
            <th key={`${desc}h`}>{desc}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets
          .filter((e) => (filterUpdate === '' ? true : new RegExp(filterUpdate, 'i').test(e.name)))
          .map((planet) => (
            <Planet planet={planet} key={`${planet.name}d`} />
          ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  filterUpdate: state.filters.filterByName.name,
  data: state.filters.data,
  isLoading: state.filters.isLoading,
  arrayFilter: state.filters.filterByNumericValues,
  order: state.filters.order,
});

export default connect(mapStateToProps, null)(Table);

Table.propTypes = {
  filterUpdate: propTypes.string.isRequired,
  data: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  arrayFilter: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  isLoading: propTypes.bool.isRequired,
  order: propTypes.instanceOf(Object).isRequired,
};
