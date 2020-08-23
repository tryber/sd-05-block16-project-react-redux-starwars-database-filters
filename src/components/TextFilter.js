import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { textFilter } from '../actions/index';

class TextFilter extends React.Component {
  render() {
    const { loading, textInput } = this.props;
    return (
      <div>
        {!loading && (
          <div>
            <label htmlFor="name">Busca por planeta:</label>
            <input
              type="text"
              data-testid="name-filter"
              placeholder="Faça sua busca"
              onChange={(e) => textInput(e.target.value)}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.planetReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  textInput: (text) => dispatch(textFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextFilter);

TextFilter.propTypes = {
  loading: propTypes.bool.isRequired,
  textInput: propTypes.func.isRequired,
};
