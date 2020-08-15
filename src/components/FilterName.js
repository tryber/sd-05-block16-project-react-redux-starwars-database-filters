import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterNameAction } from '../actions';

class FilterName extends React.Component {

  render() {
    const { fetching, getInput } = this.props;
    // const { filterName } = this.props;
    return (
      <div>
        {!fetching && (
          <div>
            {/* <p>{filterName.name}</p> */}
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
  // filterName: state.filters.filterByName,
});

const mapDispatchToProps = (dispatch) => ({
  getInput: (input) => dispatch(filterNameAction(input)),
});

FilterName.propTypes = {
  fetching: propTypes.bool.isRequired,
  getInput: propTypes.func.isRequired,
  // filterName: propTypes.shape({
  //   filterByName: propTypes.object }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
