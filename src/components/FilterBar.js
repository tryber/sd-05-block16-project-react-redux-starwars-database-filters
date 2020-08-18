import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterName } from '../actions';

class FilterBar extends Component {
  render() {
    const { filterName } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="name-filter"
          onChange={(e) => filterName(e.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterName: (inputText) => dispatch(filterName(inputText)),
});

export default connect(null, mapDispatchToProps)(FilterBar);
