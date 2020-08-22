import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchByName from '../actions/searchByName';

class SearchBar extends Component {
  render() {
    const { handleChangeInput } = this.props;
    return (
      <div>
        <label htmlFor="input-name-filter">
          Search for a planet by its name:
          <input
            data-testid="name-filter"
            type="text"
            onChange={(event) => handleChangeInput(event.target.value)}
          />
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleChangeInput: (event) => dispatch(searchByName(event)),
});

SearchBar.propTypes = {
  handleChangeInput: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchBar);
