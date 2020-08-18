import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Planet from './planet';

function Table(props) {
  if (props.isLoading) return <h1>No data</h1>;
  const { filterUpdate, data } = props;
  const planets = data.results.map((e) => {
    delete e.residents;
    const t = { ...e };
    return t;
  });

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
});

export default connect(mapStateToProps, null)(Table);

Table.propTypes = {
  filterUpdate: propTypes.string.isRequired,
  data: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  isLoading: propTypes.bool.isRequired,
};
