import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { pegandoNomeAction } from '../actions';

class SearchBar extends Component {
  render() {
    return (
      <input
        type="text"
        data-testid="name-filter"
        onChange={(event) => this.props.pegarNome(event.target.value)}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  pegarNome: (name) => dispatch(pegandoNomeAction(name)),
});

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  pegarNome: propTypes.func.isRequired,
};
