import React, { Component } from 'react';
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
    // const {} = this.props
    return (
      <div>
        <h1>FILTROS: </h1>
        <input data-testid="name-filter" type="text" onChange={(e) => this.props.inputText(e.target.value)} />

        <form>

          <select data-testid="column-filter" onChange={(e) => this.setState({ column: e.target.value })}>
            <option>Select Column</option>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          {/* <h1>{this.state.column}</h1> */}

          <select data-testid="comparison-filter" onChange={(e) => this.setState({ comparison: e.target.value })}>
            <option />
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          {/* <h1>{this.state.comparison}</h1> */}

          <input type="number" data-testid="value-filter" onChange={(e) => this.setState({ value: e.target.value })} name="" id="" />
          {/* <h1>{this.state.value}</h1> */}

          <button data-testid="button-filter" type="button" onClick={() => this.props.submitFilter(this.state)}>Filtrar</button>
        </form>
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputText: (e) => dispatch(inputText(e)),
  submitFilter: (e) => dispatch(submitFilter(e)),
});


export default connect(null, mapDispatchToProps)(Filter);
