import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { numericFilter } from '../actions';

class Select extends React.Component {
  render() {
    const { filteredNumbers } = this.props;
    return (
      <div>
        <select data-testid="column-filter" name="column">
          <option value="selecione">selecione</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" name="comparison">
          <option value="selecione">selecione</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" data-testid="value-filter" />
        <button
          type="button"
          data-testid="button-filter"
          onClick={(event) => filteredNumbers(event.target.value)}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filteredNumbers: (event) => dispatch(numericFilter(event)),
});

Select.propTypes = {
  filteredNumbers: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Select);
