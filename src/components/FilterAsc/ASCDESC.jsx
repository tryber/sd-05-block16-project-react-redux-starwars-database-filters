import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortChangeASC } from '../../actions';

class ASCDESC extends Component {
  render() {
    const { selectedRadio } = this.props;
    return (
      <Fragment>
        <label htmlFor="ASC">
          <input
            type="radio"
            id="ASC"
            value="ASC"
            data-testid="column-sort-input"
            onClick={(e) => selectedRadio(e.target.value)}
          />
          ASC
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            id="DESC"
            value="DESC"
            data-testid="column-sort-input"
            onClick={(e) => selectedRadio(e.target.value)}
          />
          DSC
        </label>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectedRadio: (sort) => dispatch(sortChangeASC(sort)),
});

ASCDESC.propTypes = {
  selectedRadio: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ASCDESC);
