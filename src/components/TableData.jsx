/** @format */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table11.css';

function tableBody(planet) {
  return (
    <tr key={planet.name}>
      <td>{planet.name}</td>
      <td>{planet.climate}</td>
      <td>{planet.terrain}</td>
      <td>{planet.diameter}</td>
      <td>{planet.gravity}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.population}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  );
}

class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.numericFilter = this.numericFilter.bind(this);
    this.nameFilter = this.nameFilter.bind(this);
    this.allPlanets = this.allPlanets.bind(this);
  }

  componentDidMount() {
    const { filters } = this.props;
    filters.forEach((filtro) => {
      const { column } = filtro;
      document.getElementById(column).remove();
    });
  }

  numericFilter() {
    const { data, filters } = this.props;
    let planetas = data;
    filters.forEach((filtro) => {
      const { comparison, column, value } = filtro;
      if (comparison === 'maior que') {
        planetas = planetas.filter((planet) => planet[column] > Number(value));
      } else if (comparison === 'menor que') {
        planetas = planetas.filter((planet) => planet[column] < Number(value));
      } else {
        planetas = planetas.filter((planet) => planet[column] === value);
      }
    });
    return <tbody className="table">{planetas.map((planet) => tableBody(planet))}</tbody>;
  }

  nameFilter() {
    const { name, data } = this.props;
    const dataFilteredByName = data.filter((planet) => planet.name.includes(name));
    return <tbody className="table">{dataFilteredByName.map((planet) => tableBody(planet))}</tbody>;
  }

  allPlanets() {
    const { data } = this.props;
    return <tbody className="table">{data.map((planet) => tableBody(planet))}</tbody>;
  }

  render() {
    const {
      name, comparison, column, value,
    } = this.props;
    if (name !== '') {
      return this.nameFilter();
    }
    if (name === '' && comparison !== '' && column !== '' && value !== '') {
      return this.numericFilter();
    }
    return this.allPlanets();
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  name: state.filters.filterByName.name,
  filters: state.filters.filterByNumericValues,
});

// Para resolver o problema do codeclimate 'prop-type array is forbiden', utilizei a função InstanceOf que encontrei neste site: https://github.com/yannickcr/eslint-plugin-react/issues/2079

TableData.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
  filters: PropTypes.instanceOf(Array).isRequired,
  column: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(TableData);
