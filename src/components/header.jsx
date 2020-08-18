import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>Procurar pelo nome:</p>
        <input
          data-testid="name-filter" type="text" nome="name-filter"
          onChange={(event) => { this.props.filterByName(event.target.value); }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
});

Header.propTypes = {
  filterByName: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
