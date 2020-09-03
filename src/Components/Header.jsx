import React, { Component } from 'react';
import Filter from './Filter';
import NumericFilters from './NumericFilter';
import FiltersList from './FiltersList';
import SorterContainer from './SorterContainer';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Filter />
        <SorterContainer />
        <NumericFilters />
        <FiltersList />
      </div>
    );
  }
}
