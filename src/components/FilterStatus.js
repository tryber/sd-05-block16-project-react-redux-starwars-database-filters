import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItemState } from '../actions/index';

class FilterStatus extends React.Component {
  render() {
    const { arrayFiltros, deleteItem } = this.props;
    return (
      <div className="filtros">
        {(arrayFiltros.length > 0) ? <h2>Filtros:</h2> : null}
        {arrayFiltros.map(({ column, comparison, value }, index) =>
          (<span key={column} data-testid="filter">{`${column} ${comparison} ${value}`}
            <button onClick={() => deleteItem(index)}>X</button></span>))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrayFiltros: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (index) => dispatch(deleteItemState(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterStatus);

FilterStatus.propTypes = {
  arrayFiltros: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItem: PropTypes.func.isRequired,
};
