import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderFiltersFromList } from '../actions';

const columnArray = [
  'Name', 'rotation Period', 'orbital Period',
  'diameter', 'climate', 'gravity', 'terrain',
  'surface Water', 'population', 'films', 'created',
  'edited', 'url'];

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
    };
    this.ColumnFunc = this.ColumnFunc.bind(this);
  }

  ColumnFunc(event) {
    return this.setState({ column: event.target.value });
  }

  render() {
    return (
      <div>
        <select data-testid="column-sort" onChange={this.ColumnFunc}>
          {columnArray.map((value) => (<option key={value} value={value}>{value}</option>))}
        </select>
        <span> ASC
        <input
          data-testid="column-sort-input"
          type="radio"
          value="ASC"
          name="sort"
          onClick={(event) => this.setState({ sort: event.target.value })}
        />
        </span>
        <span> DESC
        <input
          data-testid="column-sort-input"
          type="radio"
          value="DESC"
          name="sort"
          onClick={(event) => this.setState({ sort: event.target.value })}
        />
        </span>
        <button data-testid="column-sort-button" onClick={() => this.props.order(this.state)}>
          Filter
        </button>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  order: (filter) => dispatch(orderFiltersFromList(filter)),
});

export default connect(null, mapDispatchToProps)(Order);
Order.propTypes = {
  order: PropTypes.func.isRequired,
};
