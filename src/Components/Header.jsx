import React, { Component } from 'react';
import Filter from './Filter';
import NumericFilters from './NumericFilter';
import './HeaderContainer.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1>Cabeçalho</h1>
        <Filter />
        <NumericFilters />
      </div>
    );
  }
}
