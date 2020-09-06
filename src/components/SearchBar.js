//Verifiquei com o PR do Mauricio D'avilla, mas fiquei com dúvida de o pq foi usado MapDispatchToProps, enviei a pergunta para ele.
// Acabei entendendo por conta. MapDispatchToProps é usado quando você quer alterar o reducer, mapStateToProps é quando você quer prover um state para o componente
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterPlanet } from '../actions';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          // value={this.props.filterByName}
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
