import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { combinaActions } from '../actions';

class FiltroNumerico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { filtraCombineAction } = this.props;
    return (
      <div>
        <select
          onChange={(event) => this.handleChange(event)}
          data-testid="column-filter"
          name="column"
        >
          <option disabled selected value="">Características</option>
          <option value="rotation_period">rotation_period</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="surface_water">surface_water</option>
          <option value="population">population</option>
        </select>
        <select
          onChange={(e) => this.handleChange(e)} data-testid="comparison-filter" name="comparison"
        >
          <option>Comparison</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <input
          onChange={(event) => this.handleChange(event)}
          data-testid="value-filter" name="value"
        />
        <button data-testid="button-filter" onClick={() => filtraCombineAction(this.state)} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filtraCombineAction: (e) => dispatch(combinaActions(e)),
});

FiltroNumerico.propTypes = {
  filtraCombineAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FiltroNumerico);
