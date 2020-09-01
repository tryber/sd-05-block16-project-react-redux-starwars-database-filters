/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByName } from '../actions/index';

function FilterByName({ searchFilter }) {
  return (
    <section>
      <label htmlFor="name">Search</label>
      <input
        data-testid="name-filter"
        type="text"
        onChange={(event) => searchFilter(event.target.value)}
      />
    </section>
  );
}

// const mapDispatchToProps = { name: filterByName };

const mapDispatchToProps = (dispatch) => ({
  searchFilter: (value) => dispatch(filterByName(value)),
});

export default connect(null, mapDispatchToProps)(FilterByName);

FilterByName.propTypes = {
  searchFilter: propTypes.func.isRequired,
};
