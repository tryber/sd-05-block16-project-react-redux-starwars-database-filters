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
    const { filtraCombineAction, filterSelected } = this.props;
    let resultadoSelected = [
      '', 'population', 'rotation_period', 'diameter', 'surface_water', 'orbital_period',
    ];

    resultadoSelected = resultadoSelected.filter((s) => !filterSelected.includes(s));
    return (
      <div>
        <select
          onChange={(event) => this.handleChange(event)}
          data-testid="column-filter"
          name="column"
        >
          { resultadoSelected.map((e) => (<option value={e}>{e}</option>)) }
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

// live com Carla Nakajuni 14/09/2020

const mapStateToProps = (state) => ({
  filterSelected: state.filters.filterByNumericValues.map((optFilt) => optFilt.column),
});

const mapDispatchToProps = (dispatch) => ({
  filtraCombineAction: (e) => dispatch(combinaActions(e)),
});

FiltroNumerico.propTypes = {
  filtraCombineAction: PropTypes.func.isRequired,
  filterSelected: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltroNumerico);
