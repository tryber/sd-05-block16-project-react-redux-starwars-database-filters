import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { nameChangeASC } from '../../actions';
import COLUNAS from './colunas';

class Select extends Component {
  render() {
    const { selectedName } = this.props;

    return (
      <Fragment>
        <p>Ordem</p>
        <select
          name="columnValue"
          onChange={(e) => selectedName(e.target.value)}
          id="order"
          data-testid="column-sort"
        >
          {COLUNAS.map((item) => (
            <option key={item}>{item}</option>
          ))}
          ;
        </select>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectedName: (name) => dispatch(nameChangeASC(name)),
});

Select.propTypes = {
  selectedName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Select);
