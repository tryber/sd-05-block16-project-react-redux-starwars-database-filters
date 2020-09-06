import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { nameChangeASC } from '../../actions';

class Select extends Component {
  render() {
    const {
      selectedName,
    } = this.props;
    const COLUNAS = [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
      'films',
      'created',
      'edited',
      'url',
    ];

    return (
      <>
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
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectedName: (name) => dispatch(nameChangeASC(name)),
});

FilterAsc.propTypes = {
  selectedName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Select);
