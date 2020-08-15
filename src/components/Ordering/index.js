import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setOrder } from '../../actions';
import RI from '../RadioInput';

class Ordering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnOptions: [
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
      ],
      radio: 'ASC',
      columnValue: 'name',
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { columnOptions, radio, columnValue } = this.state;
    return (
      <div>
        <select
          name="columnValue"
          onChange={this.handleEvent}
          data-testid="column-sort"
        >
          {columnOptions.map((each) => (
            <option key={each}>{each}</option>
          ))}
        </select>
        <RI value1="ASC" value2="DESC" onClick={this.handleEvent} />
        <br />
        <button
          type="button"
          onClick={() => this.props.order(columnValue, radio)}
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  order: (a, b) => dispatch(setOrder(a, b)),
});

Ordering.propTypes = {
  order: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Ordering);
