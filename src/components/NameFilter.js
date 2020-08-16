import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import nameSearch from '../actions/nameSearch';

class NameFilter extends React.Component {
  render() {
    const { handleNameSearch } = this.props;
    return (
      <div>
        <label htmlFor="name">Procurar: </label>
        <input
          name="name"
          type="text"
          data-testid="name-filter"
          onChange={(event) => handleNameSearch(event.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleNameSearch: (event) => dispatch(nameSearch(event)),
});

export default connect(null, mapDispatchToProps)(NameFilter);

NameFilter.propTypes = {
  handleNameSearch: PropTypes.func.isRequired,
};
