import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterNumberAction } from '../actions';

class FilterNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // [Honestidade acadêmica] - Escrito com modelo.
  // (Trybe Course, 'Forms em React').
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { getNumberInput } = this.props;
    const { column, comparison, value } = this.state;
    getNumberInput(column, comparison, value);
  }

  render() {
    const { fetching } = this.props;
    return (
      <div>
        {!fetching && (
          <div>
            <p>See more filters:</p>
            <select name="column" data-testid="column-filter" onChange={this.handleChange}>
              <option />
              <option>population</option>
              <option>orbital_period</option>
              <option>diameter</option>
              <option>rotation_period</option>
              <option>surface_water</option>
            </select>
            <select name="comparison" data-testid="comparison-filter" onChange={this.handleChange}>
              <option />
              <option value="maior que">maior que</option>
              <option value="menor que">menor que</option>
              <option value="igual a">igual a</option>
            </select>
            <input
              data-testid="value-filter"
              type="number"
              name="value"
              onChange={this.handleChange}
            />
            <button type="button" data-testid="button-filter" onClick={this.handleClick}>
              Filtrar
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: state.planetReducer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getNumberInput: (column, comparison, value) =>
    dispatch(filterNumberAction(column, comparison, value)),
});

FilterNumber.propTypes = {
  fetching: propTypes.bool.isRequired,
  getNumberInput: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumber);
