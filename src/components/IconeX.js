import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import removeFiltros from '../actions/removeFiltros';

class IconeX extends React.Component {
  render() {
    const { filtros } = this.props;
    return (
      <div>
        <span>Filtros:</span>
        <br />
        <br />
        {filtros.map((filtro) => (
          <div data-testid="filter">
            <button
              onClick={this.props.handleClick}
              id={filtro.column}
            >
              X
            </button>
            {filtro.column}{/* |{filtro.comparison}|{filtro.value} */}
          </div>
        ))}
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filtros: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (event) => dispatch(removeFiltros(event)),
});

IconeX.propTypes = {
  handleClick: Proptypes.func.isRequired,
  filtros: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(IconeX);
