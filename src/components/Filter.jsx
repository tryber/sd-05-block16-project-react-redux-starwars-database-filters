import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputText, submitFilter } from '../reducers';
import FilterInput from './FilterInput';
import BtnToSubmit from './BtnToSubmit';
import SelectComparison from './SelectComparison';

const filtrosColuna = ['population', 'orbital_period', 'diameter',
  'rotation_period',
  'surface_water',
];

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
    const { inputTextprops, submitFilterprops, filterByNumericValues } = this.props;

    const filtrosAtivos = filterByNumericValues.map((f) => {
      if (f.column) { return f.column; } return null;
    });
    // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
    const filtrosFiltrados = filtrosColuna.filter((x) => !filtrosAtivos.includes(x));

    return (
      <div>
        <FilterInput change={(e) => inputTextprops(e.target.value)} />
        <form>
          <select
            data-testid="column-filter"
            onChange={(e) => this.setState({ column: e.target.value })}
          >
            <option>Coluna</option>
            {filtrosFiltrados.map((filtro) => (
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
  filterByNumericValues: state.filters.filterByNumericValues,
});

Filter.propTypes = {
  inputTextprops: PropTypes.func.isRequired,
  submitFilterprops: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
