import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { filter } from '../actions';

// texto digitado deve ser salvo num campo filters: { filterByName: { name } }

class Filter extends Component {
  render() {
    const { filtro } = this.props;
    return (
      <div>
        <label htmlFor="name-filter">
          <span>Filtre Aqui: </span>
          <input
            placeholder="DIGITE AQUI"
            type="text"
            data-testid="name-filter"
            onChange={(e) => filtro(e.target.value)}
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filtro: (e) => dispatch(filter(e)),
});

Filter.propTypes = {
  filtro: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
