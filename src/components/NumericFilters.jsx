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
  }

  render() {
    const { filterNValues } = this.props;
    const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const options2 = ['menor que', 'maior que', 'igual'];

    return (
      <div>
        <select data-testid="column-filter" placeholder="Selecione" onChange={(e) => this.setState({ column: e.target.value })}>
          <option value="" disabled selected>Selecione</option>
          {/*  https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box */}
          {options.map((opcao) => (<option>{opcao}</option>))}
        </select>
        <select data-testid="comparision-filter" onChange={(e) => this.setState({ comparison: e.target.value })}>
          <option value="" disabled selected>Selecione</option>
          {options2.map((opcao) => (<option>{opcao}</option>))}
        </select>
        <input data-testid="value-filter" type="number" onChange={(e) => this.setState({ value: e.target.value })} />
        <button type="button" data-testid="button-filter" onClick={() => filterNValues(this.state)}>Filtrar</button>
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
};
