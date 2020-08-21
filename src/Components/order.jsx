import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { headerOrder } from '../Actions/actions';

class OrderToMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'name',
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
          {this.props.columns.map((e) => (
            <option>{e}</option>
          ))}
        </select>
        <div>
          <input data-testid="column-sort-input" type="radio" name="ord" id="1" value="ASC" onClick={() => this.setState({ sort: 'ASC' })} />
          <label htmlFor="1">ASC</label>
          <input data-testid="column-sort-input" type="radio" name="ord" id="2" value="DESC" onClick={() => this.setState({ sort: 'DSC' })} />
          <label htmlFor="2">DSC</label>
        </div>
        <button data-testid="column-sort-button" onClick={() => this.props.upOrder(this.state)}>
          Ordernar
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  columns: state.filters.header,
});
const mapDispatchToProps = (dispatch) => ({
  upOrder: (sel) => dispatch(headerOrder(sel)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderToMe);

OrderToMe.propTypes = {
  upOrder: propTypes.func.isRequired,
  columns: propTypes.arrayOf(propTypes.string).isRequired,
};
