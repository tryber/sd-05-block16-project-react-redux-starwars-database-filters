import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import filterByName from '../actions/index';

class FilterName extends Component {
  render() {
    const { isLoading, texto } = this.props;
    return (
      <div>
        {!isLoading && (
          <input data-testid="name-filter" type="text" onChange={(i) => texto(i.target.value)} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.planReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  texto: (texto) => dispatch(filterByName(texto)),
});

FilterName.propTypes = {
  isLoading: propTypes.bool.isRequired,
  texto: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
