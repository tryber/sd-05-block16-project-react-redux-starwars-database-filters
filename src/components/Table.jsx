import React from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import Body from './Body';

const Table = () => (
  <div>
    <h1>StarWars Datatable with Filters</h1>
    <SearchBar />
    <table>
      <Header />
      <Body />
    </table>
  </div>
);

export default Table;
