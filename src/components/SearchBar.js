import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchFilter } from '../actions/index';

class SearchBar extends React.Component {
  render() {
    const { inputValue, onChange } = this.props;
    return (
      <div>
        Search:
        <input type="text" value={inputValue} onChange={onChange} data-testid="name-filter" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(searchFilter(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
