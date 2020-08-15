import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import chooseOrder from '../actions/chooseOrder';

const columnOptions = ['', 'name', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

class OrderTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { column, sort } = this.state;
    this.props.click(column, sort);
  }

  render() {
    const { handleChange, handleClick } = this;
    const { column } = this.state;
    return (
      <div>
        <select name="column" onChange={handleChange} value={column} data-testid="column-sort">
          {columnOptions.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <div>
          <label htmlFor="ASC">
            ASC
            <input
              data-testid="column-sort-input" type="radio" id="ASC"
              name="sort" value="ASC" onClick={handleChange}
            />
          </label>
          <label htmlFor="DESC">
            DESC
            <input
              data-testid="column-sort-input" type="radio" id="DESC"
              name="sort" value="DESC" onClick={handleChange}
            />
          </label>
          <button
            type="button" data-testid="column-sort-button" onClick={handleClick}
          >
            Filtrar
          </button>
        </div>
      </div>
    );
  }
}

OrderTable.propTypes = {
  click: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.filters.order,
});

const mapDispatchToProps = (dispatch) => ({
  click: (column, sort) => dispatch(chooseOrder(column, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
