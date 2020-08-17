import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterNameAction } from '../actions';

class FilterName extends React.Component {

  render() {
    const { fetching, getInput } = this.props;
    return (
      <div>
        {!fetching && (
          <div>
            <h4>Search for specific planet:</h4>
            <input
              data-testid="name-filter"
              type="text"
              name=""
              onChange={(e) => getInput(e.target.value)}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.planetReducer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getInput: (input) => dispatch(filterNameAction(input)),
});

FilterName.propTypes = {
  fetching: propTypes.bool.isRequired,
  getInput: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
