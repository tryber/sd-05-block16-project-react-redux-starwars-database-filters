import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItemState } from '../actions/index';

class FilterStatus extends React.Component {
  render() {
    const { arrayFiltros, deleteItem } = this.props;
    return (
      <div>
        <h2>Filtros:</h2>
        {arrayFiltros.map(({ column, comparison, value }, index) =>
          (<p key={column} data-testid="filter">{`${column} ${comparison} ${value}`}
            <button onClick={() => deleteItem(index)}>X</button></p>))}
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
