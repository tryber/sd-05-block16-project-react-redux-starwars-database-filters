import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterPlanet } from '../actions/actionFilter';

class Input extends React.Component {
  render() {
    const { searchByName } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(event) => searchByName(event.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchByName: (nome) => dispatch(filterPlanet(nome)),
});

export default connect(null, mapDispatchToProps)(Input);

Input.propTypes = {
  searchByName: propTypes.func.isRequired,
}
