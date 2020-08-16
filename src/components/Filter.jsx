import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputText, submitFilter } from '../reducers';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  render() {
    const { inputTextprops, submitFilterprops } = this.props;
    return (
      <div>
        <input data-testid="name-filter" type="text" onChange={(e) => inputTextprops(e.target.value)} />
        <form>
          <select data-testid="column-filter" onChange={(e) => this.setState({ column: e.target.value })}>
            <option>Coluna</option>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select data-testid="comparison-filter" onChange={(e) => this.setState({ comparison: e.target.value })}>
            <option>Compare</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input type="number" data-testid="value-filter" onChange={(e) => this.setState({ value: e.target.value })} name="" id="" />
          <button data-testid="button-filter" type="button" onClick={() => submitFilterprops(this.state)}>Filtrar</button>
        </form>
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputTextprops: (e) => dispatch(inputText(e)),
  submitFilterprops: (e) => dispatch(submitFilter(e)),
});

Filter.propTypes = {
  inputTextprops: PropTypes.func.isRequired,
  submitFilterprops: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Filter);
