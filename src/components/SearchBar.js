// Verifiquei com o PR do Mauricio D'avilla, mas fiquei com dúvida de o pq
// foi usado MapDispatchToProps, enviei a pergunta para ele.
// Acabei entendendo por conta. MapDispatchToProps é usado quando você
// quer alterar o reducer, mapStateToProps é
// quando você quer prover um state para o componente
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanet } from '../actions';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input data-testid="name-filter"
          onChange={(event) => this.props.filterByName(event.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterPlanet(name)),
});

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  filterByName: PropTypes.func.isRequired,
};
