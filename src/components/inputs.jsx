import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchFilter } from '../actions/index';


class SearchBar extends React.Component {
  render() {
    const { getValue } = this.props;
    return (
      <div>
        <label htmlFor="searchbar">Procurar planeta</label>
        <input
          type="text"
          data-testid="name-filter"
          id="searchbar"
          onChange={(event) => getValue(event.target.value)}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getValue: (textFilter) => dispatch(searchFilter(textFilter)) });
SearchBar.propTypes = {
  getValue: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(SearchBar);
