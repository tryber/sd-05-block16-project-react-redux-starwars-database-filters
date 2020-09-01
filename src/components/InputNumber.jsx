import React from "react";
import { connect } from "react-redux";
import { filterByNumber } from "../actions/actionFilter";

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    }
  }

  render() {
    return (
      <div>
        <select data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparasion-filter">
          <option value="maior">Maior que</option>
          <option value="menor">Menor que</option>
          <option value="igual">Igual a</option>
        </select>
        <input type="number" data-testid="value-filter" />
        <button
          data-testis="button-filter"
          onClick={() => filterByNumber(this.state)}
        >
          Adicionar Filtro
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByNumber: (number) => dispatch(filterByNumber(number)),
});

export default connect(null, mapDispatchToProps)(InputNumber);
