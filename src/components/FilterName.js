import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPlanetsThunk, filterNameAction } from '../actions';

class FilterName extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     input: '',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  componentDidMount() {
    const { async } = this.props;
    async();
  }

  // handleChange(e) {
  // const { nameFilter, getInput } = this.props;
  // const { input, name } = e.target;
  // this.setState({ [name]: input });
  // getInput(nameFilter);
  // }

  // getInput(e) {
  // const { nameFilter } = this.props;
  // return {
  //   nameFilter: e.target.value,
  // }
  // }

  render() {
    const { fetching, getInput } = this.props;
    return (
      <div>
        {!fetching && (
          <div>
            <p>Search for specific planet:</p>
            <input
              data-testid="name-filter"
              type="text"
              name=""
              // onChange={this.handleChange}
              onChange={getInput}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.planetReducer.fetching,
  error: state.planetReducer.err,
  nameFilter: state.filterNameReducer.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  async: (data) => dispatch(fetchPlanetsThunk(data)),
  getInput: (input) => dispatch(filterNameAction(input)),
});

FilterName.propTypes = {
  fetching: propTypes.bool.isRequired,
  error: propTypes.object.isRequired,
  nameFilter: propTypes.string.isRequired,
  async: propTypes.func.isRequired,
  getInput: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
