import React from 'react';
import { connect } from 'react-redux';
import { ordenaFiltro } from '../actions';

const arrayCabecalho = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

class Bonus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
  }
  render() {
    return (
      <div>
        <select
          data-testid="column-sort"
          onChange={(e) => this.setState({ column: e.target.value })}
        >
          {arrayCabecalho.map((titulo) => (
            <option value={titulo}>{titulo}</option>
          ))}
        </select>
        <br />
        <input
          type="radio"
          data-testid="column-sort-input"
          name="sort"
          value="ASC"
          onClick={(e) => this.setState({ sort: e.target.value })}
        />{' '}
        ASC
        <br />
        <input
          type="radio"
          data-testid="column-sort-input"
          name="sort"
          value="DESC"
          onClick={(e) => this.setState({ sort: e.target.value })}
        />{' '}
        DESC
        <br />
        <button data-testid="column-sort-button" onClick={() => this.props.ordem(this.state)}>
          Filtrar
        </button>
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ordem: (event) => dispatch(ordenaFiltro(event)),
});

export default connect(null, mapDispatchToProps)(Bonus);

Bonus.propTypes = {
  ordem: propTypes.func.isRequired,
};
