import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { totalFilter } from '../actions/';

const cOptions = [
  'coluna',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class SelectsInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      col: '',
      com: '',
      val: 0,
    };
    this.handleCh = this.handleCh.bind(this);
  }
  handleCh(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    const { co, cm, va } = this.state;
    const { filter } = this.props;
    const fCheck = cOptions;
    if (filter.length > 0) {
      filter.forEach((elements) => {
        if (fCheck.includes(elements.column)) {
          fCheck.splice(fCheck.indexOf(elements.column), 1);
        }
      });
    }
    return (
      <div>
        <label htmlFor="selectColumn">Filtros</label>
        <select data-testid="column-filter" name="co" id="selectColumn" onChange={this.handleCh}>
          {fCheck.map((elements) => (<option value={elements}>{elements}</option>))}
        </select>
        <label htmlFor="sel" />
        <select data-testid="comparison-filter" name="cm" id="sel" onChange={this.handleCh}>
          <option>Comparação</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" name="va" data-testid="value-filter" onChange={this.handleCh} />
        <button type="button" data-testid="button-filter" onClick={() => this.props.gF(co, cm, va)}>
          Filtrar
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  filter: state.filters.filterByNumericValues,
});
const mapDispatchToProps = (dispatch) => ({
  gF: (a, b, c) => dispatch(totalFilter(a, b, c)),
});
SelectsInputs.propTypes = {
  filter: PropTypes.func.isRequired,
  gF: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectsInputs);
