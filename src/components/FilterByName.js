import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByName } from '../actions/index';

class FilterByName extends React.Component {
  render() {
    const { isFetching, inputText } = this.props;
    return (
      <div>
        {!isFetching && (
        <div>
          <h4>Procurar</h4>
          <input
            data-testid="name-filter"
            type="text"
            name=""
            onChange={(e) => inputText(e.target.value)}
          />
        </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  inputText: (inputText) => dispatch(filterByName(inputText)),
});

FilterByName.propTypes = {
  isFetching: propTypes.bool.isRequired,
  inputText: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByName);
