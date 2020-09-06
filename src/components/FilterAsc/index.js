import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from './Select';
import ASCDESC from './ASCDESC';
import { sortAction } from '../../actions';

class FilterAsc extends Component {
  render() {
    const { sortFilter, sortASC, columnASC } = this.props;

    return (
      <div className="order">
        <Select />
        <ASCDESC />
        <button
          data-testid="column-sort-button"
          onClick={() => sortFilter(sortASC, columnASC)}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sortASC: state.filterASC.sort,
  columnASC: state.filterASC.column,
});

const mapDispatchToProps = (dispatch) => ({
  sortFilter: (sort, column) => dispatch(sortAction(sort, column)),
});

FilterAsc.propTypes = {
  columnASC: PropTypes.string.isRequired,
  sortASC: PropTypes.string.isRequired,
  sortFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterAsc);
