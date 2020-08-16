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
    const { inputTextprops, submitFilterprops, filtrosAtivos } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(e) => inputTextprops(e.target.value)}
        />
        <form>
          <select
            data-testid="column-filter"
            onChange={(e) => this.setState({ column: e.target.value })}
          >
            <option>Coluna</option>
            {filtrosAtivos.map((filtro) => (
              <option key={filtro} value={filtro}>{filtro}</option>
            ))}
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

const mapStateToProps = (state) => ({
  filtrosAtivos: state.filters.filtrosAtivos,
});

Filter.propTypes = {
  inputTextprops: PropTypes.func.isRequired,
  submitFilterprops: PropTypes.func.isRequired,
  filtrosAtivos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
