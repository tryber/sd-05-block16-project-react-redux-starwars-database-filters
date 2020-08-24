import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterName } from '../actions';

class SearchBar extends React.Component {
  render() {
    const { filterByName } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Digite o nome do planeta"
          onChange={(event) => filterByName(event.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterName(name)),
});

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  filterByName: PropTypes.func.isRequired,
};
