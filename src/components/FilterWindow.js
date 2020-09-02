import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterValues, removeFilters } from '../actions';

class FilterWindow extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.filtW = this.filtW.bind(this);
  }

  filtW(array, index) {
    if(array === undefined || array.comparison === '') {
      return '';
    }
    return (
       <div>
         <div data-testid="filter">
         {array.column} {array.comparison} {array.value}
         <button onClick={() => this.props.removeF(index)}>X</button>
         </div>
       </div>
    )
  }

  render() {
    const { filter } = this.props;
    return(
      <div data-testid="filter"> 
        <div>{this.filtW(filter[filter.length - 2], filter.length - 2)}</div>
        <div>{this.filtW(filter[filter.length - 1], filter.length - 1)}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filter: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterV: (name1, name2, name3) => dispatch(filterValues(name1, name2, name3)),
  removeF: (index) => dispatch(removeFilters(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterWindow);