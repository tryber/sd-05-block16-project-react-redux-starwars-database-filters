import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import filterByName from '../actions/getFiltersOptions';
import FilterNumber from './FilterNumber';
import FilterNumberOptions from './FilterNumberOptions';

function SearchBar(props) {
  const { handleChange } = props;
  return (
    <div>
      <label htmlFor="filter-name">
        Procurar
        <input data-testid="name-filter" name="filter-name" type="text" onChange={handleChange} />
      </label>
      <FilterNumber />
      <FilterNumberOptions />
    </div>
  );
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.getPlanets.error,
  isFetching: state.getPlanets.isFetching,
  data: state.getPlanets.data.results,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (e) => dispatch(filterByName(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

