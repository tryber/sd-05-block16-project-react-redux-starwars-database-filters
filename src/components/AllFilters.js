import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilter } from '../actions';

class AllFilters extends Component {
  hC(e) {
    const { remove, filtros } = this.props;
    const filtrosCopia = [...filtros];
    const filtrosFinal = filtros.map((filt) => filt.column);
    filtrosCopia.splice(filtrosFinal.indexOf(e.target.id), 1);
    remove(filtrosCopia);
  }
// prettier-ignore
  render() {
    const { filtros } = this.props;
    return (
      <div>
        {filtros.map((filt) => (
          <div data-testid='filter'>
            {`${filt.column} ${filt.comparison} ${filt.value}`}
            <button id={filt.column} onClick={(e) => this.hC(e)}>
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filtros: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (a) => dispatch(removeFilter(a)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllFilters);

AllFilters.propTypes = {
  filtros: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};
