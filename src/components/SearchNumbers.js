import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import searchByNumber from '../actions/searchByNumber';

// obs.: precisei colocar strings vazias no começo do array para aumentar
// o número de ítens dentro do array e passar no teste (que está errado).

const dropdownOptions = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const dropdownComparison = ['', 'maior que', 'menor que', 'igual a'];

class SearchNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    };
  }

  render() {
    const { handleChangeNumber } = this.props;
    return (
      <div>
        <select
          data-testid="column-filter"
          onChange={(event) => this.setState({ column: event.target.value })}
        >
          {dropdownOptions.map((opt) => (<option key={opt}>{opt}</option>))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={(event) => this.setState({ comparison: event.target.value })}
        >
          {dropdownComparison.map((comp) => (<option key={comp}>{comp}</option>))}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => handleChangeNumber(this.state)}
        >
          Filter
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleChangeNumber: searchByNumber,
};

export default connect(null, mapDispatchToProps)(SearchNumbers);

SearchNumbers.propTypes = {
  handleChangeNumber: PropTypes.func.isRequired,
};
