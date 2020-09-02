import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import procurarPlaneta from '../actions/procurarPlaneta';

class Procurar extends React.Component {
  render() {
    const { buscaPlaneta } = this.props;
    return (
      <div>
        <span>Procurar: </span>
        <input
          type="text"
          data-testid="name-filter"
          onChange={(e) => buscaPlaneta(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.reducerBasico.name,
});

const mapDispatchToProps = (dispatch) => ({
  buscaPlaneta(nomePlaneta) {
    dispatch(procurarPlaneta(nomePlaneta));
  },
});

Procurar.propTypes = {
  buscaPlaneta: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Procurar);
