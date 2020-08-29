import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class FilterByName extends React.Component {
  render() {    
    const { input } = this.props;
    return (
      <div>
        <h4>Procurar</h4>
        <input
          data-testid="name-filter"
          type="text"
          name=""
          onChange={(e) => input(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.reducer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  input: (inputText) => dispatch(filterByName(inputText)),
});

FilterByName.propTypes = {
  inputText: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByName);
