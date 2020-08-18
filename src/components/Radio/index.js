import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setOrder } from '../../actions';


class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { options, radio, columnValue } = this.state;
    return (
      <div>
        <div>
          <select
            name="columnValue" onChange={this.handleClick} id="order" data-testid="column-sort"
          >
            { options.map((item) => (
              <option key={item}>{item}</option>
            ))};
          </select>
        </div>
        <input
          type="radio" onClick={this.handleClick} data-testid="column-sort-input"
          name="radio" id="ASC" value="ASC"
        />
        <label htmlFor="ASC">ASC</label>
        <input
          type="radio" onClick={this.handleClick} data-testid="column-sort-input"
          name="radio" id="DESC" value="DESC"
        />
        <label htmlFor="DESC">DESC</label>
        <button
          type="button" onClick={() => this.props.order(columnValue, radio)}
          data-testid="column-sort-button"
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  order: (a, b) => dispatch(setOrder(a, b)),
});

Radio.propTypes = {
  order: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Radio);
