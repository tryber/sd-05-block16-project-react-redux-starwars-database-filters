import React, { Component } from 'react';
import { pegandoNomeAction } from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {
  render() {
    return <input type="type" data-testid="name-filter" onChange={(event) => this.props.pegarNome(event.target.value)} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  pegarNome: (name) => dispatch(pegandoNomeAction(name)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
