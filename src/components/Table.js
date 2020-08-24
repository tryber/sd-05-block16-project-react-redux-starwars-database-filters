import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';
import TableHeaders from './tableheaders';
import TableValues from './tableValues';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.filterTest = this.filterTest.bind(this);
  }
  componentDidMount() {
    const { getCurrentPlanets } = this.props;
    // console.log('antes de chamar')
    getCurrentPlanets();
  }
  filterTest() {
    const { swPlanetss, filter } = this.props;
    let data = swPlanetss;
    if (filter.length > 0) {
      filter.forEach((element) => {
        const { column, comparison, value } = element;
        if (comparison === 'maior que') {
          data = data.filter((plani) => +plani[column] > +value);
        } else if (comparison === 'menor que') {
          data = data.filter((plani) => +plani[column] < +value);
        } else if (comparison === 'igual a') {
          data = data.filter((plani) => +plani[column] === +value);
        }
      });
    }
    return data;
  }

  render() {
    const { swPlanetss, isFetching, textFilter, filter } = this.props;
    this.filterTest();
    if (isFetching) {
      return <p>Carregando...</p>;
    }
    let planet = swPlanetss;
    if (filter.length > 0) planet = this.filterTest();
    return (
      <section>
        <table>
          <TableHeaders />
          <tbody>
            {planet
              .filter((planets) =>
                planets.name.toLowerCase().includes(textFilter.toLowerCase()),
              )
              .map((elements) => (
                <TableValues key={elements.diameter} elements={elements} />
              ))}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  swPlanetss: state.swPlanetss.data,
  isFetching: state.swPlanetss.isFetching,
  textFilter: state.filters.filterByName.name,
  filter: state.filters.filterByNumericValues,
});
const mapDispatchToProps = (dispatch) => ({
  getCurrentPlanets: () => dispatch(fetchPlanets()),
});
// Dúvida solucionada no site
// https://stackoverflow.com/questions/38684925/react-eslint-error-missing-in-props-validation
Table.propTypes = {
  getCurrentPlanets: PropTypes.func.isRequired,
  swPlanetss: PropTypes.arrayOf.isRequired,
  isFetching: PropTypes.bool.isRequired,
  textFilter: PropTypes.string.isRequired,
  filter: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
