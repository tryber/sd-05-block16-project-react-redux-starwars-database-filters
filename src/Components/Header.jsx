import React, { Component } from 'react';
import Filter from './Filter';
import NumericFilters from './NumericFilter';
import FiltersList from './FiltersList';
import './HeaderContainer.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Filter />
        <NumericFilters />
        <FiltersList />
      </div>
    );
  }
}
