import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { funcaoApi, filterByName } from '../actions';
import Body from './Body';
import Select from './Select';
import Filters from './Filters';
import Order from './Order';

class Table extends Component {
  componentDidMount() {
    const { endpoint } = this.props;
    endpoint();
  }

  render() {
    const { isLoading, allPlanets, filterName } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={(event) => filterName(event.target.value)}
        />
        <Select />
        <Filters />
        <Order />
        {isLoading && 'Loading...'}
        {allPlanets.length > 0 && <Body />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.apiReducer.isLoading,
  allPlanets: state.apiReducer.data,
  numericFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  endpoint: () => dispatch(funcaoApi()),
  filterName: (resultado) => dispatch(filterByName(resultado)),
});

Table.propTypes = {
  endpoint: PropTypes.func.isRequired,
  filterName: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  allPlanets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      diameter: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      gravity: PropTypes.string,
      population: PropTypes.string,
      climate: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      films: PropTypes.array,
      url: PropTypes.string,
      created: PropTypes.string,
      edited: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
