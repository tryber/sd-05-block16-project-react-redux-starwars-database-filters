import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterValues, removeFilters } from '../actions';

class FilterWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.filtW = this.filtW.bind(this);
  }

  filtW() {
    return (
      <div>
        {this.props.filter.map((item, index) => {
          if (item.comparison !== undefined) {
            return (
              <div data-testid="filter">
                {item.column}
                {item.comparison}
                {item.value}
                <button onClick={() => this.props.removeF(index)}>X</button>
              </div>
            );
          }
          return (null);
        })}
      </div>
    );
  }

  render() {
    const { filter } = this.props;
    return <div>{filter.length > 0 ? this.filtW() : null}</div>;
  }
}

const mapStateToProps = (state) => ({
  filter: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterV: (name1, name2, name3) => dispatch(filterValues(name1, name2, name3)),
  removeF: (index) => dispatch(removeFilters(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterWindow);

FilterWindow.propTypes = {
  filter: PropTypes.arrayOf(Object).isRequired,
  removeF: PropTypes.func.isRequired,
};
