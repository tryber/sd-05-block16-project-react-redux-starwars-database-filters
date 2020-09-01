import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterValues } from '../actions';

class NumericFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.valueChange = this.valueChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.compChange = this.compChange.bind(this);
    this.colChange = this.colChange.bind(this);
  }

  valueChange(event) {
    this.setState({ value: event.target.value });
  }

  colChange(event) {
    this.setState({ column: event.target.value });
  }

  compChange(event) {
    this.setState({ comparison: event.target.value });
  }

  handleClick() {
    const { filterNValues } = this.props;
    filterNValues(this.state);
  }

  render() {
    const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const options2 = ['menor que', 'maior que', 'igual'];
    const {
      handleChange, handleClick, compChange, colChange,
    } = this.props;

    return (
      <div>
        <select data-testid="column-filter" placeholder="Selecione" onChange={colChange}>
          <option value="" disabled selected>Selecione</option>
          {/*  https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box */}
          {options.map((opcao) => (<option>{opcao}</option>))}
        </select>
        <select data-testid="comparison-filter" onChange={compChange}>
          <option value="" disabled selected>Selecione</option>
          {options2.map((opcao) => (<option>{opcao}</option>))}
        </select>
        <input data-testid="value-filter" type="number" onChange={handleChange} />
        <button type="button" data-testid="button-filter" onClick={handleClick}>Filtrar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterNValues: (estado) => dispatch(filterValues(estado)),
});


export default connect(null, mapDispatchToProps)(NumericFilters);

NumericFilters.propTypes = {
  filterNValues: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  compChange: PropTypes.func.isRequired,
  colChange: PropTypes.func.isRequired,
};
