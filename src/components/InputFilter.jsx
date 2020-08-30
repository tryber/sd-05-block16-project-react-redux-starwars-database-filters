import React from 'react';
import { connect } from 'react-redux';
import newFilter from '../actions/dataAction';

const InputFilter = (props) => {
  return(
    <div>
      <input
        type="text"
        onChange={props.onChange}
        data-testid="name-filter"
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(newFilter(e)),
});

export default connect(null, mapDispatchToProps)(InputFilter);
