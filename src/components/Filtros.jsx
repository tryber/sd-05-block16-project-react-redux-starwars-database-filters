import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteFilter } from '../actions';

class Filtros extends React.Component {
  constructor(props) {
    super(props);
    this.makeNewFilter = this.makeNewFilter.bind(this);
  }
  makeNewFilter(event) {
    const { filtros, removeFilter } = this.props;
    const newFilter = filtros.filter((filtro) => filtro.column !== event.target.name);
    removeFilter(newFilter);
  }

  render() {
    const { filtros } = this.props;
    return (
      <div>
        <h4>Filtros</h4>
        {filtros.map((filtro) => (
          <div key={filtro.column} data-testid="filter">
            <span>{filtro.column}</span>
            <span>{filtro.comparison}</span>
            <span>{filtro.value}</span>
            <button
              name={filtro.column}
              onClick={(event) => this.makeNewFilter(event)}
              type="button"
            >
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
  removeFilter: (event) => dispatch(deleteFilter(event)),
});

Filtros.propTypes = {
  filtros: PropTypes.instanceOf(Array).isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filtros);
