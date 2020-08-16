import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputText, submitFilter } from '../reducers';
import FilterInput from './FilterInput';
import BtnToSubmit from './BtnToSubmit';
import SelectComparison from './SelectComparison';

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
        <FilterInput change={(e) => inputTextprops(e.target.value)} />
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

          <SelectComparison change={(e) => this.setState({ comparison: e.target.value })} />
          {/* input do number */}
          <input
            type="number"
            data-testid="value-filter"
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <BtnToSubmit click={() => submitFilterprops(this.state)} />
        </form>
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
