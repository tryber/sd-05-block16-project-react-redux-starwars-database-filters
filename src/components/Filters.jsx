import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByName } from '../actionsCreator';

class Filters extends Component {
  render() {
    const { setFilterByName } = this.props;
    return (
      <div>
        <div>Header</div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={({ target }) => { setFilterByName(target.value); }}
        />
      </div>
    )
  }
}

const mapStateToProps = ({}) => (
  {}
);

const mapDispatchToProps = (dispatch) => (
  { setFilterByName: (name) => { dispatch(filterByName(name)); } }
);

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
