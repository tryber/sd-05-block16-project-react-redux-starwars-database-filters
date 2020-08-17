import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByName } from '../actions';
import Select from './Select';

class SearchBar extends React.Component {
  render() {
    const { nameFilter } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={(event) => nameFilter(event.target.value)}
        />
        <Select />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  nameFilter: (event) => dispatch((filterByName(event))),
});

SearchBar.propTypes = {
  nameFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchBar);
