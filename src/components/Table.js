// Referências:
// https://github.com/tryber/sd-05-live-lectures/blob/react-redux-pt2/iss/src/components/ISSLocation.js
// https://www.w3schools.com/html/html_tables.asp
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanetList } from '../actions';
import { filterPlanetsByName } from '../actions';
import Form from './Form';

const columns = [
  'Nome',
  'Período de rotação',
  'Perído de órbita',
  'Diâmetro',
  'Clima',
  'Gravidade',
  'Terreno',
  'Água na superfície',
  'População',
  'Filmes',
  'Criado',
  'Editado',
  'URL',
];

function comparisonFunc(column, comparison, value) {
  switch (comparison) {
    case 'maior que':
      return column > value;
    case 'menor que':
      return column < value;
    case 'igual a':
      return column === value;
    default:
      return true;
  }
}

function filteringByPlanet(data, filtersNumeric, filteredName) {
  const dataFilteredByText = data.filter((planet) =>
    planet.name.toLowerCase().includes(filteredName.toLowerCase()),
  );
  return dataFilteredByText.filter((planet) => {
    let retorno = true;
    for (let i = 0; i < filtersNumeric.length; i += 1) {
      if (
        !comparisonFunc(
          Number(planet[filtersNumeric[i].column]),
          filtersNumeric[i].comparison,
          Number(filtersNumeric[i].value),
        )
      ) {
        retorno = false;
      }
    }
    return retorno;
  });
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching, data, error } = this.props.planetsList;
    const { filteredName, nameFilter, filterByNumericValues } = this.props;
    if (error) return <h1>{error}</h1>;
    if (isFetching) return <h1>Carregando...</h1>;
    return (
      <div>
        <header>
          <label htmlFor="name-input">Procure um planeta:</label>
          <input
            data-testid="name-filter" type="text" id="name-input"
            onChange={(event) => nameFilter(event.target.value)}
          />
          <Form />
        </header>
        <table>
          <thead> <tr>{columns.map((column) => (<th>{column}</th>))}</tr> </thead>
          <tbody>
            {filteringByPlanet(data, filterByNumericValues, filteredName).map((planet) => (
              <tr> {Object.keys(planet).map((propriety) => {
                if (propriety !== 'residents') {
                  return <td>{planet[propriety]}</td>;
                }
                return null;
              })} </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetsList: {
    isFetching: state.planetsList.isFetching,
    data: state.planetsList.data,
    error: state.planetsList.error,
  },
  filteredName: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanetList()),
  nameFilter: (filteredName) => dispatch(filterPlanetsByName(filteredName)),
});

Table.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  nameFilter: PropTypes.func.isRequired,
  filteredName: PropTypes.string.isRequired,
  planetsList: PropTypes.shape({
    isFetching: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
