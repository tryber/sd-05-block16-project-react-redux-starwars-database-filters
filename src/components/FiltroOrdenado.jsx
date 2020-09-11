import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterOrder } from '../actions/actionFilter';

const optionsHeader = [
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

class FiltroOrdenado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
    };
  }

  render() {
    return (
      <div>
        <select
          data-testid="column-sort" onChange={(event) =>
            this.setState({ column: (event.target.value) })}
        >
          {optionsHeader.map((option) =>
            <option value={option}>{option}</option>)}
        </select>
        <input
          value="ASC"
          data-testid="column-sort-input"
          name="order"
          type="radio"
          onClick={(event) => this.setState({ sort: (event.target.value) })}
        /> ASC
        <input
          value="DESC"
          data-testid="column-sort-input"
          name="order"
          type="radio"
          onClick={(event) => this.setState({ sort: (event.target.value) })}
        /> DESC
        <button
          data-testid="column-sort-button"
          onClick={() => this.props.filterOrder(this.state)}
        > Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterOrder: (event) => dispatch(filterOrder(event)),
});

export default connect(null, mapDispatchToProps)(FiltroOrdenado);

FiltroOrdenado.propTypes = {
  filterOrder: propTypes.func.isRequired,
};
