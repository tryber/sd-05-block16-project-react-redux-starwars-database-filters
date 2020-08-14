import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../actionsCreator';

const tableKeys = [
  'name',
  'gravity',
  'rotation_period',
  'climate',
  'orbital_period',
  'diameter',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function rKey(key) {
  const rand = 'qwertyuiopasdfghjklç'[Math.floor(Math.random(20))];
  return `${key}_${rand}_${Math.floor(Math.random() * 1E12)}`;
}

function formatName(name = '') {
  const str = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
  return str.replace('_', ' ');
}

class Table extends Component {

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  render() {
    const { isLoading, data, filters } = this.props;
    if (isLoading) return <div>Carregando...</div>;
    return data.length ?
      (
        <table>
          <thead>
            <tr>
              {
                tableKeys.map((header) =>
                  <th key={rKey(header)}>{formatName(header)}</th>,
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              data.filter(({ name }) => name.includes(filters.filterByName.name))
                .map((planet) => (
                  <tr key={rKey(planet.name)}>
                    { tableKeys.map((key) => (<td key={rKey(key)}>{planet[key]}</td>)) }
                  </tr>
                ))
            }
          </tbody>
        </table>
      ) : <div>error</div>;
  }
}

const mapStateToProps = ({ loading, data, filters }) => (
  { isLoading: loading, filters, data }
);

const mapDispatchToProps = (dispatch) => (
  { fetchPlanets: () => { dispatch(fetchData()); } }
);

Table.defaultProps = {
  filters: { filterByName: { name: '' } }
};

Table.propTypes = {
  isLoading: propTypes.bool.isRequired,
  data: propTypes.arrayOf(propTypes.object).isRequired,
  fetchPlanets: propTypes.func.isRequired,
  filters: propTypes.shape({
    filterByName: propTypes.object
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
