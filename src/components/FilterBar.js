import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterName } from '../actions';

class FilterBar extends Component {
  render() {
    const { nameInput } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="name-filter"
          onChange={(e) => nameInput(e.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  nameInput: (inputText) => dispatch(filterName(inputText)),
});

export default connect(null, mapDispatchToProps)(FilterBar);

FilterBar.propTypes = {
  nameInput: propTypes.func.isRequired,
};
