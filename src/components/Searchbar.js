import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Dropfilters from './Dropfilters';
import FilterDisplay from './FilterDisplay';
import { filterByName } from '../reducers/filters';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { HelloWorld: 'HelloWorld' };
  }
  render() {
    const { handleChangeName } = this.props;
    return (
      <div>
        <label htmlFor="name-filter-input"> Search planet by name:
        <input
          data-testid="name-filter"
          type="text"
          onChange={handleChangeName}
        />
        </label>
        <Dropfilters />
        <FilterDisplay />
      </div>
    );
  }
}
// {event => this.props.filterByName({ name: event.target.value })}

const mapDispatchToProps = (dispatch) => ({
  handleChangeName: (event) => dispatch(filterByName(event.target.value)),
});

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  handleChangeName: PropTypes.func.isRequired,
};
