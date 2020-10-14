import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import filterByName from '../actions/index';

class FilterName extends Component {
  render() {
    const { isLoading, name } = this.props;
    return (
      <div>
        {!isLoading && (
          <input data-testid="name-filter" type="text" onChange={(i) => name(i.target.value)} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.planReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  name: (texto) => dispatch(filterByName(texto)),
});

FilterName.propTypes = {
  isLoading: propTypes.bool.isRequired,
  name: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
