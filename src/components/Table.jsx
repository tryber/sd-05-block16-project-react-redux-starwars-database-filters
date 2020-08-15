/* eslint no-param-reassign: "error" */

import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../actionsCreator';
import {
  TABLE_KEYS,
  rKey,
  formatName,
} from '../services/Utils';

function Header() {
  return (
    <thead>
      <tr>
        {
          TABLE_KEYS.map((header) =>
            <th key={rKey(header)}>{formatName(header)}</th>,
          )
        }
      </tr>
    </thead>
  )
}

class Table extends Component {

  constructor(props) {
    super(props);
    this.renderFiltered = this.renderFiltered.bind(this);
  }

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  renderFiltered() {
    const { filters: { filterByNumericValues, filterByName }, data } = this.props;
    data.forEach((planet) => {
      planet.visible = true;
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (planet.visible) {
          switch (comparison) {
            case 'MENOR_QUE':
              planet.visible = Number(planet[column]) < Number(value);
              break;
            case 'MAIOR_QUE':
              planet.visible = Number(planet[column]) > Number(value);
              break;
            case 'IGUAL':
              planet.visible = Number(planet[column]) === Number(value);
              break;
            default:
          }
        }
      });
    });
    return (
      data.filter((planet) => planet.visible)
        .filter((planet) => planet.name.includes(filterByName.name))
        .map((planet) => (
          <tr key={rKey(planet.name)}>
            {TABLE_KEYS.map((keys) => <td key={rKey(planet.url)}>{planet[keys]}</td>)}
          </tr>
        ))
    );
  }

  render() {
    const { isLoading, data } = this.props;
    if (isLoading) return <div>Carregando...</div>;
    return data.length ?
      (
        <table>
          <Header />
          <tbody>
            { this.renderFiltered() }
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
  filters: { filterByName: { name: '' } },
};

Table.propTypes = {
  isLoading: propTypes.bool.isRequired,
  data: propTypes.arrayOf(propTypes.object).isRequired,
  fetchPlanets: propTypes.func.isRequired,
  filters: propTypes.shape({
    filterByName: propTypes.object,
    filterByNumericValues: propTypes.arrayOf(propTypes.object),
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
