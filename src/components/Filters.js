import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { numericFilters } from '../actions/index';

const Filters = ({ opcoes, escolhaFiltro }) => (
  <div>
    {opcoes.map((filter) => (
      <span data-testid="filter" key={filter.value}>
        <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
        <button type="button" onClick={() => escolhaFiltro(filter)}>
          X
        </button>
      </span>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  opcoes: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  escolhaFiltro: (resultado) => dispatch(numericFilters(resultado)),
});

Filters.propTypes = {
  escolhaFiltro: PropTypes.func.isRequired,
  opcoes: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
