import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import ordenacao from '../actions/ordenacao';

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

class OrdenarTabela extends React.Component {
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
          type="radio" data-testid="column-sort-input" name="order" value="ASC"
          onClick={(e) => this.setState({ sort: e.target.value })}
        />{' '}
        ASC
        <br />
        <input
          type="radio" data-testid="column-sort-input" name="order" value="DESC"
          onClick={(e) => this.setState({ sort: e.target.value })}
        />{' '}
        DESC
        <button
          data-testid="column-sort-button"
          onClick={() => this.props.xablau(this.state)}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  xablau: (event) => dispatch(ordenacao(event)),
});

OrdenarTabela.propTypes = {
  xablau: Proptypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(OrdenarTabela);
