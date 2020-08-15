import React from 'react';
import { connect } from 'react-redux';
import { setOrder } from '../../actions';

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
      radioValue: 'ASC',
      columnValue: 'name',
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { columnOptions, radioValue, columnValue } = this.state;
    return (
      <div>
          <select name="columnValue" onChange={this.handleEvent} data-testid="column-sort">
            {columnOptions.map(each => <option key={each}>{each}</option>)}
          </select>
          <input id="asc" name="radioValue" type="radio" value="ASC" onClick={this.handleEvent} data-testid="column-sort-input"/>
          <label htmlFor="asc">ASC</label>
          <input id="dsc" name="radioValue" type="radio" value="DESC" onClick={this.handleEvent} data-testid="column-sort-input"/>
          <label htmlFor="dsc">DSC</label>
          <br/>
          <button type="button" onClick={()=> this.props.order(columnValue, radioValue)} data-testid="column-sort-button">Ordenar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  order:(a, b) => dispatch(setOrder(a, b)),
});

export default connect(null, mapDispatchToProps)(Ordering);
