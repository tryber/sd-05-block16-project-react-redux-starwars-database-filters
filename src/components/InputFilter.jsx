import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import newFilter from '../actions/dataAction';

const InputFilter = (props) => (
  <div>
    Buscar:
    <input
      type="text"
      onChange={props.onChange}
      data-testid="name-filter"
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(newFilter(e)),
});

InputFilter.propTypes = {
  onChange: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(InputFilter);
